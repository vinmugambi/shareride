<template>
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
                   v-validate="'required|confirmed: passwordregister'"
                   placeholder="Re enter your password" />
        </b-col>
        <b-col md="5"
               sm="5"
               xs="12"
               class="d-flex align-items-center pl-0">
            <small>
                <span class="text-danger"
                      v-if="errors.has('passwordconfirm')">
                    <i class="icon-exclamation icons"></i> {{ errors.first('passwordform') }}</span>
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
