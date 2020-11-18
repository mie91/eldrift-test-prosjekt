<template>
  <div class="projects">
    <v-container my-5>
      <h1 class="elblue--text">Projects</h1>
      <v-card tile class="px-3 ma-1" v-for="project in projects" :key="project.title">
        <v-row :class="`pl-3 project ${project.status}`"> 
          <v-col cols="12" md="6">
            <div class="caption elblue--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
           <v-col cols="6" sm="4" md="2">
            <div class="caption elblue--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption elblue--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="4" md="2">
            <div class="caption elblue--text">Status</div>
            <div>{{ project.status }}</div>
          </v-col>
        </v-row>
      </v-card>

     
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  }
}
</script>

<style lang="scss">

.project.complete {
  border-left: 4px solid $elgreen;
}

.project.ongoing {
  border-left: 4px solid $elblue;
}

.project.overdue {
  border-left: 4px solid $elyellow;
}


</style>
