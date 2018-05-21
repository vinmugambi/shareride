<template>
    <div id="dashboard">
        <b-navbar toggleable="md"
                  type="light">
            <b-container>
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand class="text-primary">Shareride</b-navbar-brand>

                <b-collapse is-nav
                            id="nav_collapse">
                    <b-navbar-nav class="mx-auto">
                        <b-nav-item to="/dashboard" @click="activate(0)" :class="{'active': activeitem==0}">my rides</b-nav-item>
                        <b-nav-item to="/dashboard" @click="activate(1)" :class="{'active': activeitem==1}">my subscriptions</b-nav-item>
                        <b-nav-item to="/dashboard" @click="activate(2)" :class="{'active': activeitem==2}">browse rides</b-nav-item>
                    </b-navbar-nav>

                    <b-navbar-nav class="ml-auto">
                        <!-- <b-nav-item>Profile</b-nav-item> -->
                        <b-nav-item @click="logout">Logout</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                </b-collapse>
            </b-container>

        </b-navbar>
        <div class="container-fluid">
            <div class="row dash">
                <b-col md="3"
                       class="sidebar text-center pt-5">
                    <b-btn class="btn btn-outline-secondary mt-5"
                           v-b-modal.createnew>Create a new ride</b-btn>
                    <b-modal id="createnew"
                             class="text-left"
                             header-bg-variant="dark"
                             header-text-variant="info"
                             body-bg-variant="light"
                             title="Create new ride">
                        <form action="">
                            <label class="text-left"
                                   for="destination">Destination</label>
                            <select class="form-control form-control-sm"
                                    v-validate="'required'"
                                    name="destination">
                                <option value="null">Select where your journey ends</option>
                                <option v-for="city in cities"
                                        :key="city.name"
                                        value="city.name">{{city.name}}</option>
                            </select>
                            <label class="text-left"
                                   for="origin">Origin</label>
                            <select class="form-control form-control-sm"
                                    v-validate="'required'"
                                    name="origin">
                                <option value="null">Select where your journey ends</option>
                                <option v-for="city in cities"
                                        :key="city.name"
                                        value="city.name">{{city.name}}</option>
                            </select>
                            <label class="text-left"
                                   for="date">Date of ride</label>
                            <input type="date"
                                   name="date"
                                   class="form-control form-control-sm"
                                   placeholder="Enter the date of ride"
                                   v-validate="'required'" />
                            <label class="text-left"
                                   for="date">Time of ride</label>
                            <input type="time"
                                   name="timw"
                                   class="form-control form-control-sm"
                                   placeholder="Enter the time of the ride"
                                   v-validate="'required'" />
                            <label class="text-left"
                                   for="destination">Number of seats</label>
                            <input type="number"
                                   class="form-control form-control-sm"
                                   name="seats"
                                   placeholder="Enter the number of people you will accomodate"
                                   v-validate="'required|number|length:1|max:65'" />

                        </form>
                        <div slot="modal-footer"
                             class="w-100">
                      
                            <b-btn class="float-right"
                                   type="submit"
                                   variant="primary"
                                   @click="show=false">
                                Create
                            </b-btn>
                        </div>
                    </b-modal>
                </b-col>
                <b-col md="9">
                   <single/>
                </b-col>
            </div>
        </div>
    </div>
</template>

<script>
import Single from "../Single";

export default {
  components: { Single },
  data: function() {
    return {
      activeitem: 0,
      cities: [
        { name: "Nairobi" },
        { name: "Mombasa" },
        { name: "Kisumu" },
        { name: "Nakuru" },
        { name: "Eldoret" },
        { name: "Nyeri" },
        { name: "Machakos" },
        { name: "Garissa" },
        { name: "Embu" }
      ]
    };
  },
  methods: {
    activate: function(el) {
      this.activeitem = el;
    },
    logout() {

    }
  }
};
</script>

<style>
.navbar {
  border-bottom: 1px solid #d9e0e6;
  padding-top: 0px;
  padding-bottom: 0px;
}
.navbar-brand {
  font-size: 1.7em;
}
.nav-link {
  border-left: 1px solid #d9e0e6;
  font-weight: bold;
}
.nav-item.active .nav-link{
  font-weight: bold;
  background: white;
  border-left: 1px solid var(--yellow);
  color: var(--yellow) !important;
}
.nav-link:hover {
  color: var(--blue) !important;
}
.sidebar {
  border-right: 1px solid #d9e0e6;
}
.dash {
  min-height: 90vh;
}
.modal-header {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.modal-content button {
  border-radius: 20px;
}
.modal-content,
.modal-header,
.modal-footer {
  border: none;
  border-radius: 0px;
}
.modal-footer {
  padding: 0.5rem;
}
</style>
