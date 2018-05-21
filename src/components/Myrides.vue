<template>
    <div id="my-rides">
        <div class="row pt-4">
            <div class="col">
                <div v-if="activeitem == 0">
                    <div class="header">
                    <h2 class="gray">Here is a list of your rides</h2>
                </div>
                <div class="pt-3 my-rides-list">
                    <ul class="list-group">
                        <myride v-for="(myride, index) in myrides"
                                :key="myride.description+index"
                                :ride="myride" />
                    </ul>
                </div>
                </div>
                <div v-if="activeitem == 1">
                     <div class="header py-2">
                    <h2 class="gray">Here are the rides you are subscribed to</h2>
                </div>
                <div class="my-rides-list">
                    <ul class="list-group">
                        <subscribed v-for="myride in myrides"
                                    :key="myride.origin+index"
                                    :ride="myride" />
                    </ul>
                </div>
                </div>
                
                <div v-if="activeitem == 2">
                    <div class="header pb-4 pt-1">
                        <h2 class="gray">Look for rides that might interest you</h2>
                    </div>
                    <div class="my-rides-list">
                        <ul class="list-group">
                            <ride v-for="myride in myrides"
                                  :key="myride.departure+index"
                                  :ride="myride" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Myride from "./Myride";
import Ride from "./Rides";
import Subscribed from "./Subscribed";

export default {
  components: {
    Myride,
    Ride,
    Subscribed
  },
  props: ["activeitem"],
  data: function() {
    return {
      myrides: [
        {
          destination: "Kisumu",
          departure: "Nairobi",
          slots: 10,
          available: 10,
          date: Date.now(),
          returnDate: "tuesday",
          description:
            "Visit Lake Victoria island. I do not which, guess I will know when I reach there"
        },
        {
          destination: "Kisumu",
          departure: "Nairobi",
          slots: 10,
          available: 10,
          date: Date.now(),
          returnDate: "tuesday",
          description:
            "Visit Lake Victoria island. I do not which, guess I will know when I reach there"
        },
        {
          destination: "Kisumu",
          departure: "Nairobi",
          slots: 10,
          available: 10,
          date: Date.now(),
          returnDate: "tuesday",
          description:
            "Visit Lake Victoria island. I do not which, guess I will know when I reach there"
        }
      ]
    };
  }
};
</script>

<style>
</style>
