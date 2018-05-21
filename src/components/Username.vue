<template>
    <div class="form-input row my-2"
         role="group">
        <b-col md="1"
               sm="2"
               xs="12"
               class="labels d-flex align-items-center pl-1">
            <label for="username-input"
                   class="my-auto">
                Username
            </label>
        </b-col>
        <b-col md="6"
               sm="5"
               xs="12">
            <input id="username-input"
                   v-model.trim="usernameinput"
                   type="usernameinput"
                   class="form-control form-control-sm"
                   name="usernameinput"
                   v-validate="'required|length:3|alpha|max:4'"
                   placeholder="Enter your preferred username" />
        </b-col>
        <b-col md="5"
               sm="5"
               xs="12"
               class="d-flex align-items-center pl-0">
            <small>
                <span class="text-danger"
                      v-if="errors.has('usernameinput')">
                    <i class="icon-exclamation icons"></i> {{ errors.first('usernameinput') }}</span>
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
