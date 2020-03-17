<template>
  <div id="login"
       class="container  h-100">
    <div class="row justify-content-center">
      <b-col md="5"
             sm="7"
             lg="4"
             xs="12"
             class="my-auto">

        <div class="card card-auth">
          <h2 class="text-center text-primary pt-4">Login to
            <strong>Shareride</strong>
          </h2>
          <div class="card-body">
            <b-form method="post"
                    class="mt-5"
                    @submit.prevent="validateAndLogin">
              <!-- <form-input/> -->
              <div class="form-group">
                <label for="emaillogin"
                       class="gray bold ml-1 mb-0"
                       id="emaillabel">Email :</label>
                <input name="emaillogin"
                       id="emaillogin"
                       class="form-control form-control-sm"
                       v-model="emaillogin"
                       v-validate="'required|email'"
                       placeholder="Enter your email" />
                <div :class="errorClass"
                     v-if="errors.has('emaillogin')">
                  <small>
                    <i class="mx-1 icon-exclamation icons"></i>{{errors.first('emaillogin')}}</small>
                </div>
              </div>
              <div class="form-group">
                <label for="passwordlogin"
                       class="gray bold ml-1 mb-0"
                       id="email-label">Password :</label>
                <input name="passwordlogin"
                       id="passwordlogin"
                       class="form-control form-control-sm"
                       type="password"
                       v-model="passwordlogin"
                       v-validate="'required'"
                       placeholder="Enter your password" />
                <div :class="errorClass"
                     v-if="errors.has('passwordlogin')">
                  <small>
                    <i class="mx-1 icon-exclamation icons"></i>{{errors.first('passwordlogin')}}</small>
                </div>
              </div>

              <div class="submit py-2">
                <b-btn variant="primary"
                       type="submit"
                       class="bold"
                       block>
                  <span>Login
                    <i class="ml-1 bold icon-arrow-right-circle icons"></i>
                  </span>
                </b-btn>
              </div>
            </b-form>
          </div>
          <div class="card-footer">
            <p>
              New to Shareride?
              <router-link to="/register">Create an account</router-link>
            </p>
          </div>
        </div>
        <span v-if="loading">
          <spinner class="my-4"
                   message="Loading ..." />
        </span>
        <b-alert v-if="haserr"
                 show
                 variant="danger">
          {{err}}
        </b-alert>
      </b-col>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Spinner from "vue-simple-spinner";

export default {
  components: {
    Spinner
  },
  data: function() {
    return {
      passwordlogin: "",
      emaillogin: "",
      errorClass: "text-info",
      loading: false,
      haserr: false,
      err: ""
    };
  },
  methods: {
    validateAndLogin() {
      this.$validator
        .validateAll()
        .then(result => {
          if (result) {
            this.loading = true;
            this.haserr = false;
            firebase
              .auth()
              .signInWithEmailAndPassword(this.emaillogin, this.passwordlogin)
              .then(user => {
                if (user.user.emailVerified) {
                  this.$router.replace("dashboard");
                } else this.$router.replace("verifyemail");
              })
              .catch(err => {
                this.haserr = true;
                this.err = err.message;
                this.loading = false;
              });
          } else {
            this.errorClass = "text-danger";
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style>
.gray {
  color: var(--gray);
}
.bold {
  font-weight: bold;
}
.btn-block {
  border-radius: 20px;
}
.form-control {
  background: transparent;
}
#login .card-footer {
  background: #e4f0f5;
  border-top: none;
}
.card-footer a {
  font-weight: bold;
}
.alert {
  border-radius: 0px;
}
</style>
