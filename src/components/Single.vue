<template>
    <div class="row">
        <div class="single-ride pt-5 pl-5 col">
            <h3>About Ride</h3>
            <p>
                <strong>Description: </strong>{{ride.description}}</p>
            <p>
                <strong>Owner: </strong> {{ride.owner}} </p>
            <p>
                <i>posted on: </i>{{ride.posted}}</p>
            <p>
                <i>Origin: </i> {{ride.origin}}</p>
            <p>
                <i>Destination: </i> {{ride.destination}}</p>
            <p>
                <i>Day: </i>{{ride.date}}</p>
            <p>
                <i>Time: </i>{{ride.time}}</p>
            <p>
                <i>Number of people: </i>{{ride.slots}}</p>
            <p>
                <i>Slots remaining: </i>{{ride.available}}</p>
            <div>
                <b-btn variant="primary">Unsubscribe </b-btn>
                <b-btn variant="danger">Subscribe</b-btn>
            </div>
        </div>
        <div class="col pt-5 border-left">
            <h3>Subscribers</h3>
            <ul class="list-unstyled">
                <li v-for="(subscriber,index) in ride.subscribers" :key="subscriber+index">
                    <i class="icon-user icons mr-3"></i>{{subscriber}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      ride: {
        subscribers: ["elius", "kiama", "janet", "mwende", "jackline"],
        owner: "Mugambi",
        posted: "Saturday",
        destination: "Kisumu",
        departure: "Nairobi",
        slots: 10,
        available: 10,
        date: "tuesday",
        description:
          "Visit Lake Victoria island. I do not which, guess I will know when I reach there"
      }
    };
  }
};
</script>

<style>
.border-left {
    border-left: 1px solid gainsboro;
}
</style>
