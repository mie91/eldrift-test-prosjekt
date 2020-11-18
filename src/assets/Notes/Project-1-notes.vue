<template>
  <div class="dashboard">
    <v-container my-2>
      <h1 class="elblue--text">Dashboard</h1>
      <v-row>
        <v-col cols="12" md="6">
          <v-btn outlined block color="elblue">1</v-btn>
        </v-col>
        <v-col cols="4" md="2">
          <v-btn outlined block color="elgreen">2</v-btn>
        </v-col>
        <v-col cols="4" md="2">
          <v-btn outlined block color="elred">3</v-btn>
        </v-col>
        <v-col cols="4" md="2">
          <v-btn outlined block color="elyellow">4</v-btn>
        </v-col>
      </v-row>

      <v-card class="pa-3">
        <v-row>
          <v-col cols="12" md="6">
            <div class="caption elblue--text">Project Title</div>
            <div>Create a new website</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption elblue--text">Person</div>
            <div>Marie Helen Berger</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption elblue--text">Due By</div>
            <div>9 January 2021</div>
          </v-col>
          <v-col cols="4" md="2">
            <div class="caption elblue--text">Status</div>
            <div>Ongoing</div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
