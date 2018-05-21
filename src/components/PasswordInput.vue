<template>
    <div class="form-input row my-2"
         role="group">
        <b-col md="1"
               sm="2"
               xs="12"
               class="labels d-flex align-items-center pl-1">
            <label for="password-register"
                   class="my-auto">
                Email
            </label>
        </b-col>
        <b-col md="6"
               sm="5"
               xs="12">
            <input id="password-register"
                   v-model.trim="passwordregister"
                   type="password"
                   class="form-control form-control-sm"
                   name="passswordregister"
                   v-validate="'required|length:8'"
                   placeholder="Enter your prefered password" />
        </b-col>
        <b-col md="5"
               sm="5"
               xs="12"
               class="d-flex align-items-center pl-0">
            <small>
                <span class="text-danger"
                      v-if="errors.has('passwordregister')">
                    <i class="icon-exclamation icons"></i> {{ errors.first('passwordregister') }}</span>
            </small>
        </b-col>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
