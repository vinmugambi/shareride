<template>
  <div id="landing"
       class="container-fluid">
    <div class="logo row">
      <div class="col d-flex align-items-center px-5">
        <div id="brand"
             class="py-auto">
          <h1 class="text-primary">Share<strong>ride</strong>
          </h1>
        </div>
        <div id="login-button" class="ml-auto">
           <router-link to="/login" class="btn btn-outline-primary round">Login</router-link>
        </div>
      </div>
    </div>

    <div class="row body">
      <b-col class="bg-dark d-flex align-items-center">
        <b-card class="py-auto">
          <H1 class="text-center">Where Riders Meet Adventure</H1>
          <h4 class="text-center text-warning">Meet fellow riders and travel the world</h4>
          <ul class="list-group list-unstyled">
            <li class="list-group-item container">
              <b-row>
                <b-col cols="2"
                       class="d-flex align-items-center">
                  <div class="icon-holder py-auto">
                    <i class="icon-people icons"></i>
                  </div>
                </b-col>
                <b-col cols="10"
                       class="d-flex align-items-center">
                  <div class="pt-3">
                    <p> Save money you would have spent on individual trips while still having fun</p>
                  </div>
                </b-col>
              </b-row>

            </li>
            <li class="list-group-item container">
              <b-row>
                <b-col cols="2"
                       class="d-flex align-items-center">
                  <div class="icon-holder py-auto">
                    <i class="icon-user icons"></i>
                  </div>
                </b-col>
                <b-col cols="10"
                       class="d-flex align-items-center">
                  <div class="pt-3">
                    <p> Save money you would have spent on individual trips while still having fun</p>
                  </div>
                </b-col>
              </b-row>

            </li>
          </ul>
        </b-card>
      </b-col>
      <b-col>
        <b-row class="half"
               style="border-bottom:1px solid #d9e0e6; ">
               <b-col class="middle pt-5">
                 <h4>How <strong> it works</strong></h4>
                 <ul class="list-unstyled py-2">
                   <li>
                     <i class="icon-arrow-right-circle icons"></i>
                     <span>Submit a ride</span>
                   </li>
                   <li>
                     <i class="icon-arrow-right-circle icons"></i>
                     <span>Receive ride subscriptions</span>
                   </li>
                   
                   <li>
                     <i class="icon-arrow-right-circle icons"></i>
                     <span>Subscribe to other people rides</span>
                   </li>
                   <li>
                     <i class="icon-arrow-right-circle icons"></i>
                     <span>Have lots of fun</span>
                   </li>
                 </ul>
               </b-col>
          <b-col class="d-flex align-items-center">
            <div class="py-auto text-right">
              <h4>Start travelling now</h4>
              <router-link to="/register"
                           class="btn btn-lg btn-primary btn-block round">Register</router-link>
            </div>
          </b-col>

        </b-row>
        <b-row class="half">
               <b-col class="middle py-4">
                   <h4><strong> Tools</strong> used</h4>
                   <ul class="list-unstyled pt-3">
                     <li>Bootstrap for styling</li>
                     <li>VueJs for reponsive UI</li>
                     <li>Firebase for database</li>
                     <li>Vuex for state management</li>                     
                   </ul>
                 </b-col>          
          <b-col class="d-flex align-items-center">
            <div class="py-auto">
              <h4>Already Travelling with us?</h4>
              <router-link to="/login"
                           class="btn btn-lg btn-outline-primary  btn-block round">Login</router-link>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row.body {
  height: 87vh;
  border-top: 1px solid #d9e0e6;
}
.body .btn {
  border-radius: 30px;
}
#login-button .btn {
  border-radius: 20px;
}
.logo {
  height: 13vh;
}
.middle {
  border-right: 1px solid #d9e0e6;
}
.half {
  height: 43.5vh;
}
.bg-dark .card,
.bg-dark .list-group,
.bg-dark .list-group-item {
  background: transparent;
  border: none;
  color: whitesmoke;
}
.bg-dark i {
  font-size: 2em;
  padding: 0.3em;
  border: 2px solid var(--blue);
  color: var(--blue);
  border-radius: 50%;
}
.middle li i {
  color: var(--green);
}
.middle li {
  font-size: 1.2em;
}
</style>
