<template>
    <div id="email-verify"
         class="container-fluid">
        <div class="row justify-content-center mt-5 pt-5">
            <b-col md="4"
                   class="text-center">
                <h1>Verify your email to continue</h1>
                <div class="icon-container py-3">
                    <i class="icon-envelope  icons"></i>
                </div>
                <div>
                    <h5> A verification email was sent to <strong>{{useremail}}</strong></h5>
                    <p>
                       Please follow the provided link in the email to complete your registration. If you don’t see this within a couple of minutes, make sure to check your promotions/spam folder.
                    </p>
                    <div id="resend"
                         class="row justify-content-center">
                        <b-btn variant="primary"
                               class="ml-2"
                               @click="sendVerification">Resend email</b-btn>
                        <b-btn variant="outline-primary"
                               class="ml-2"
                               @click="logout">Not my email</b-btn>
                    </div>
                </div>
            </b-col>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
  data: function() {
    return {
      useremail: ""
    };
  },
  beforeMount() {
    this.useremail = firebase.auth().currentUser.email;
  },
  methods: {
    sendVerification() {
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          alert("A verification email has been sent to your email");
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("/register"))
        .catch(err => alert(err));
    }
  }
};
</script>

<style>
.icon-envelope {
  color: var(--purple);
  font-size: 5em;
}
#email-verify h5 {
  color: var(--gray);
}
#email-verify h1 {
  color: var(--primary);
}
</style>
