<template>
  <v-container>
    <my-toolbar-progress-bar
      :isLoading="isLoading"
      :color="toolbareColor"
      slot="extension"
    />
    <template>
      <v-bottom-navigation color="primary" horizontal>
        <v-btn
          :to="{
            name: 'CalibrationHistory',
            params: { MeasuringToolID: this.currentMeasuringToolID }
          }"
          :disabled="this.currentMeasuringToolID == -1"
        >
          <span>Kalibreringshistorikk</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </template>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Søk"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="dataList"
      class="elevation-1"
      @click:row="rowClick"
      item-key="MeasuringToolID"
      single-select
      hide-default-footer
      disable-pagination
      :search="search"
    >
      <template #item.FirstUseDate="{ item }">
        <span>{{ formatDate(item.FirstUseDate) }}</span>
      </template>
      <template #item.CalibrationDate="{ item }">
        <span>{{ formatDate(item.CalibrationDate) }}</span>
      </template>
      <template #item.NextCalibrationDate="{ item }">
        <span>{{ formatDate(item.NextCalibrationDate) }}</span>
      </template>
      <template #item.ToolUseID="{ item }">
        <v-chip :color="item.ToolUseColor" dark>
          {{ item.ToolUseID }}
        </v-chip>
      </template>

      <template #top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Måleverktøy - {{ currentHeading }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template #activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">Ny</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <dlgMeasuringTool
                      v-if="dialog"
                      v-model="editedItem"
                      :editMode="editedIndex"
                    />
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Avbryt</v-btn>
                <v-btn color="blue darken-1" text @click="save">Lagre</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template #item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template #no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import axios from "axios";
import { DataSourceURL } from "../global/variables";
import KeyValue from "../global/KeyValue";
import MyToolbarProgressBar from "@/components/MyToolbarProgressBar.vue";

export default {
  extends: KeyValue,
  components: {
    dlgMeasuringTool: () => import("../dialog/dlgMeasuringTool"),
    MyToolbarProgressBar
  },
  data() {
    return {
      search: "",
      isLoading: false,
      toolbareColor: "red",
      dialog: false,
      headers: [
        { text: "Måleverktøy", value: "ID" },
        { text: "Gruppe", value: "MeaseuringToolTypeID" },
        { text: "Beskrivelse", value: "Description" },
        { text: "SN", value: "FactoryID" },
        { text: "Status", value: "ToolUseID" },
        { text: "Tatt i bruk", value: "FirstUseDate" },
        { text: "Kalibreringsintervall", value: "CalibrationInterval" },
        { text: "Kalibreringsdato", value: "CalibrationDate" },
        { text: "Neste kalibreringsdato", value: "NextCalibrationDate" },
        { text: "KalibrertMot", value: "KalibrertMotID" },
        { text: "TestMeasuringFrom", value: "TestMeasuringFrom" },
        { text: "TestMeasuringTo", value: "TestMeasuringTo" },
        { text: "Aksjon", value: "actions", sortable: false }
      ],
      currentMeasuringToolID: -1,
      currentHeading: "",
      dataList: [],
      editedIndex: -1,
      editedItem: {
        MeasuringToolID: "",
        ToolUseID: "",
        ID: "",
        MeaseuringToolTypeID: "",
        Description: "",
        FactoryID: "",
        FirstUseDate: "",
        CalibrationInterval: "",
        KalibrertMotID: "",
        TestMeasuringFrom: "",
        TestMeasuringTo: ""
      },
      defaultItem: {
        MeasuringToolID: "",
        ToolUseID: "",
        ID: "",
        MeaseuringToolTypeID: "",
        Description: "",
        FactoryID: "",
        FirstUseDate: "",
        CalibrationInterval: "",
        KalibrertMotID: "",
        TestMeasuringFrom: "",
        TestMeasuringTo: ""
      }
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Ny" : "Endre";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    rowClick: function(item, row) {
      row.select(true);
      this.currentMeasuringToolID = item.MeasuringToolID;
      this.currentHeading = item.ID;
      this.$root.$emit("MeasuringTool", item.MeasuringToolID, item.ID);
    },
    initEditItem() {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    },
    initialize() {
      this.isLoading = true;
      this.GetMeasuringToolTypeCode();
      this.GetToolUseCode();
      this.GetData();
      this.initEditItem();
      this.isLoading = false;
    },
    GetMeasuringTool(MeasuringToolID) {
      axios({
        method: "get",
        params: { MeasuringToolID: MeasuringToolID },
        url: DataSourceURL + "/MeasuringTool/GetMeasuringTool",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET"
        }
      })
        .then(res => {
          if (!res.data.ErrorStatus) {
            this.editedItem = res.data.DataList;
            this.dialog = true;
          } else {
            alert(res.data.FeedbackText);
          }
        })
        .catch(err => {
          alert(
            `There was an error in reading /MeasuringTool/GetMeasuringTool. See details: ${err}`
          );
        });
    },

    GetData() {
      axios({
        method: "get",
        url: DataSourceURL + "/MeasuringTool/GetData",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET"
        }
      })
        .then(res => {
          this.isLoading = false;
          if (!res.data.ErrorStatus) {
            this.dataList = res.data.DataList;
          } else {
            alert(res.data.FeedbackText);
          }
        })
        .catch(err => {
          this.isLoading = false;
          alert(
            `There was an error in reading /MeasuringTool/GetData. See details: ${err}`
          );
        });
    },

    editItem(item) {
      this.editedIndex = this.dataList.indexOf(item);
      this.GetMeasuringTool(item.MeasuringToolID);
      //this.editedItem = Object.assign({}, item)
      //this.dialog = true
    },

    DeleteData(index, MeasuringToolID) {
      axios({
        method: "delete",
        url: DataSourceURL + "/MeasuringTool/DoDelete",
        params: { MeasuringToolID: MeasuringToolID },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "DELETE"
        }
      })
        .then(res => {
          if (!res.data.ErrorStatus) {
            this.dataList.splice(index, 1);
          } else {
            alert(res.data.FeedbackText);
          }
        })
        .catch(err => {
          alert(
            `There was an error in reading /MeasuringTool/Delete. See details: ${err}`
          );
        });
    },

    deleteItem(item) {
      const index = this.dataList.indexOf(item);
      if (
        confirm("Are you sure you want to delete this item? " + item.ID) == true
      ) {
        this.DeleteData(index, item.MeasuringToolID);
      }
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.initEditItem();
      });
    },

    DoSave() {
      let submit = true;

      submit = true;
      let myUrl;
      if (this.editedIndex > -1) {
        myUrl = DataSourceURL + "/MeasuringTool/DoSaveUpdate";
      } else {
        myUrl = DataSourceURL + "/MeasuringTool/DoSaveNew";
      }

      if (submit) {
        axios({
          method: "post",
          url: myUrl,
          data: { data: this.editedItem },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("user-token"),
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "POST"
          }
        })
          .then(res => {
            if (!res.data.ErrorStatus) {
              //Save OK

              //Ordre kode felt
              this.editedItem.ToolUseID = this.FindDescription(
                this.editedItem.ToolUseID,
                this.ToolUseItems
              );
              this.editedItem.MeaseuringToolTypeID = this.FindDescription(
                this.editedItem.MeaseuringToolTypeID,
                this.MeasuringToolTypeItems
              );
              if (this.editedIndex > -1) {
                Object.assign(this.dataList[this.editedIndex], this.editedItem); //Oppdatering
              } else {
                this.editedItem.MeasuringToolID = res.data.ID;
                this.dataList.push(this.editedItem); //Ny
              }
              this.close();
            } else {
              alert(res.data.FeedbackText);
            }
          })
          .catch(err => {
            alert(`There was an error saveing your form. See details: ${err}`);
          });
      }
    },

    save() {
      this.DoSave();
    }
  }
};
</script>
