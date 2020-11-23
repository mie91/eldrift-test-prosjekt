<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        v-model="editedItem.ID"
        label="ID"
        maxlength="20"
      ></v-text-field>
      <v-text-field
        v-model="editedItem.Description"
        label="Description"
        maxlength="100"
      ></v-text-field>
      <v-text-field
        v-model="editedItem.FactoryID"
        label="FactoryID"
        maxlength="25"
      ></v-text-field>
      <wtDatetime
        v-model="editedItem.FirstUseDate"
        label="Tatt i bruk"
        onlyDate
      ></wtDatetime>
      <v-text-field
        v-model.number="editedItem.CalibrationInterval"
        label="CalibrationInterval"
        type="number"
      ></v-text-field>
      <v-text-field
        v-model.number="editedItem.KalibrertMotID"
        label="KalibrertMotID"
        type="number"
      ></v-text-field>
      <v-text-field
        v-model.number="editedItem.TestMeasuringFrom"
        label="TestMeasuringFrom"
        type="number"
      ></v-text-field>
      <v-text-field
        v-model.number="editedItem.TestMeasuringTo"
        label="TestMeasuringTo"
        type="number"
      ></v-text-field>
    </v-col>
  </v-row>
</template>
<script>
import KeyValue from "../global/KeyValue";
import wtDatetime from "../components/wtDatetime.vue";

export default {
  extends: KeyValue,
  name: "dlgMeasuringTool",
  components: {
    wtDatetime
  },

  model: {
    prop: "editedItemIn",
    event: "input"
  },

  props: {
    editedItemIn: Object,
    editMode: Number //v-if="editMode !== -1" - Not in "new"
  },

  computed: {
    editedItem() {
      return this.editedItemIn;
    }
  },

  created() {
    this.GetMeasuringToolTypeCode();
  },

  methods: {
    output: function() {
      // pass back to the parent
      this.$emit("input", this.editedItem);
    }
  }
};
</script>
