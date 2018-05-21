<template>
    <div id="register"
         class="container">
        <div class="row justify-content-center">
            <b-col md="12"
                   lg="10"
                   sm="12">
                <div class="card">
                    <h2 class="text-primary pt-3 pl-3">Register for a
                        <strong>Shareride</strong> account</h2>
                    <div class="card-body mt-4">
                        <form action=""
                              @submit.prevent="validateAndRegister">
                            <div class="form-input row my-2"
                                 role="group">
                                <b-col md="1"
                                       sm="2"
                                       xs="12"
                                       class="labels d-flex align-items-center pl-1">
                                    <label for="email-login-input"
                                           class="my-auto">
                                        Email
                                    </label>
                                </b-col>
                                <b-col md="6"
                                       sm="5"
                                       xs="12">
                                    <input id="email-login-input"
                                           v-model.trim="emailregister"
                                           type="email"
                                           class="form-control form-control-sm"
                                           name="emailregister"
                                           v-validate="'required|email'"
                                           placeholder="Enter your email" />
                                </b-col>
                                <b-col md="5"
                                       sm="5"
                                       xs="12"
                                       class="d-flex align-items-center pl-0">
                                    <small>
                                        <span :class="errorClass"
                                              v-if="errors.has('emailregister')">
                                            <i class="icon-exclamation icons"></i> {{ errors.first('emailregister') }}</span>
                                    </small>
                                </b-col>
                            </div>
                            <div class="form-input row my-2"
                                 role="group">
                                <b-col md="1"
                                       sm="2"
                                       xs="12"
                                       class="labels d-flex align-items-center pl-1">
                                    <label for="password-register"
                                           class="my-auto">
                                        Password
                                    </label>
                                </b-col>
                                <b-col md="6"
                                       sm="5"
                                       xs="12">
                                    <input id="password-register"
                                           v-model.trim="passwordregister"
                                           type="password"
                                           class="form-control form-control-sm"
                                           name="passwordregister"
                                           v-validate="'required|length:8'"
                                           placeholder="Enter your prefered password" />
                                </b-col>
                                <b-col md="5"
                                       sm="5"
                                       xs="12"
                                       class="d-flex align-items-center pl-0">
                                    <small>
                                        <span :class="errorClass"
                                              v-if="errors.has('passwordregister')">
                                            <i class="icon-exclamation icons"></i> {{ errors.first('passwordregister') }}</span>
                                    </small>
                                </b-col>
                            </div>
                            <div class="form-input row my-2"
                                 role="group">
                                <b-col md="1"
                                       sm="2"
                                       xs="12"
                                       class="labels d-flex align-items-center pl-1">
                                    <label for="password-confirm"
                                           class="my-auto">
                                        Confirm
                                    </label>
                                </b-col>
                                <b-col md="6"
                                       sm="5"
                                       xs="12">
                                    <input id="password-confirm"
                                           v-model.trim="passwordconfirm"
                                           type="password"
                                           class="form-control form-control-sm"
                                           name="passwordconfirm"
                                           v-validate="'required|confirmed:'+passwordregister"
                                           placeholder="Re enter your password" />
                                </b-col>
                                <b-col md="5"
                                       sm="5"
                                       xs="12"
                                       class="d-flex align-items-center pl-0">
                                    <small>
                                        <span :class="errorClass"
                                              v-if="errors.has('passwordconfirm')">
                                            <i class="icon-exclamation icons"></i> {{ errors.first('passwordconfirm') }}</span>
                                    </small>
                                </b-col>
                            </div>
                            <!-- <b-form-group>
                                <b-form-checkbox variant="success"
                                                 id="terms"
                                                 value="accepted"
                                                 unchecked-value="not_accepted">
                                    I agree to the term of service</b-form-checkbox>
                            </b-form-group> -->
                            <b-btn type="submit"
                                   class="mt-2"
                                   variant="primary"
                                   style="border-radius: 20px">Register
                                <i class="icon-arrow-right icons"></i>
                            </b-btn>
                        </form>
                    </div>
                    <div class="card-footer">
                        Already have an account?
                        <router-link to="/login"
                                     class="text-success">login here</router-link>

                    </div>
                </div>
                <span v-if="loading">
                    <spinner class="my-4"
                             message="Loading ..." />
                </span>
                <b-alert v-if="haserr" show
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
  components: { Spinner },
  data: function() {
    return {
      accepted: false,
      passwordregister: "",
      passwordconfirm: "",
      emailregister: "",
      errorClass: "text-info",
      loading: false,
      haserr: false,
      err: ""
    };
  },
  methods: {
    validateAndRegister() {
      this.$validator
        .validateAll()
        .then(result => {
          if (result) {
            this.loading = true;
            this.haserr = false;
            firebase
              .auth()
              .createUserWithEmailAndPassword(
                this.emailregister,
                this.passwordregister
              )
              .then(user => this.$router.replace("/login"))
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
#register .card-footer {
  background: #e4f8e1;
}
#register .card-footer {
  border-top: none;
}
.alert{
    border-radius: 0px;
}
</style>
