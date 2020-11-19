<template>
  <div class="payments">
    <v-container my-5>
      <h1 class="elblue--text">Payments</h1>

      <v-row flex class="ma-2 ">
        <v-btn small class="mr-1" @click="sortBy('amount')">
          <v-icon left>mdi-credit-card</v-icon>
          <span>By amount</span>
        </v-btn>
        <v-btn small class="ml-1" @click="sortBy('person')">
          <v-icon left>mdi-account</v-icon>
          <span>By person</span>
        </v-btn>
        <v-btn small class="ml-1" @click="sortBy('status')">
          <v-icon left>mdi-check</v-icon>
          <span>By Status</span>
        </v-btn>
      </v-row>

      <v-card
        tile
        class="px-3 ma-1"
        v-for="payment in payments"
        :key="payment.name"
      >
        <v-row :class="`pl-3 payment ${payment.status}`">
          <v-col cols="6" sm="4" md="2">
            <div class="caption elblue--text">Person</div>
            <div>{{ payment.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption elblue--text">Due By</div>
            <div>{{ payment.due }}</div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="caption elblue--text">Amount</div>
            <div>{{ payment.amount }} kr</div>
          </v-col>
          <v-col cols="6" sm="2" md="2">
            <div>
              <div class="caption elblue--text">Staus</div>
              <v-chip :class="`${payment.status}`">
                {{ payment.status }}
              </v-chip>
            </div>
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
      payments: [
        {
          amount: 1200,
          person: "Marie",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          amount: 1340,
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          amount: 987,
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          amount: 1421,
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          amount: 0,
          person: "Lars",
          due: "9th Sep 2019",
          status: "canceled",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.payments.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style lang="scss">
.payment.complete {
  border-left: 4px solid $elgreen;
}

.payment.ongoing {
  border-left: 4px solid $elblue;
}

.payment.overdue {
  border-left: 4px solid $elyellow;
}

.payment.canceled {
  border-left: 4px solid $elred;
}

.theme--light.v-chip.complete:not(.v-chip--active) {
  background: $elgreen;
}

.theme--light.v-chip.ongoing:not(.v-chip--active) {
  background: $elblue;
}

.theme--light.v-chip.overdue:not(.v-chip--active) {
  background: $elyellow;
}

.theme--light.v-chip.canceled:not(.v-chip--active) {
  background: $elred;
}
</style>
