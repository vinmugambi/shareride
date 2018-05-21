<template>
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
                   v-model.trim="email"
                   type="email"
                   class="form-control form-control-sm"
                   name="email"
                   v-validate="'required|email'"
                   placeholder="Enter your email" />
        </b-col>
        <b-col md="5"
               sm="5"
               xs="12"
               class="d-flex align-items-center pl-0">
            <small>
                <span class="text-danger"
                      v-if="errors.has('email')">
                    <i class="icon-exclamation icons"></i> {{ errors.first('email') }}</span>
            </small>
        </b-col>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      email: ""
    };
  }
};
</script>

<style>
.form-input label {
  font-weight: bold;
  color: var(--gray);
}
</style>
