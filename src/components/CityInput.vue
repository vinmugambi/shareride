<template>
    <div class="form-input row my-2"
         role="group">
        <b-col md="1"
               sm="2"
               xs="12"
               class="labels d-flex align-items-center pl-1">
            <label for="city-register"
                   class="my-auto">
                City
            </label>
        </b-col>
        <b-col md="6"
               sm="5"
               xs="12">
            <select name="cityregister"
                    id="city-register"
                    class="form-control form-control-sm"
                    v-validate="'required'">
                <option v-for="city in cities" :key="city.name" value="city.name">{{city.name}}</option>
            </select>
        </b-col>
        <b-col md="5"
               sm="5"
               xs="12"
               class="d-flex align-items-center pl-0">
            <small>
                <span class="text-danger"
                      v-if="errors.has('cityregister')">
                    <i class="icon-exclamation icons"></i> {{ errors.first('cityregister') }}</span>
            </small> 
        </b-col>
    </div>
</template>

<script>
export default { 
    data: function() {
        return {
            cities: [
                {name: "Nairobi"},
                {name: "Mombasa"},
                {name: "Kisumu"},
                {name: "Nakuru"},
                {name: "Eldoret"},
                {name: "Nyeri"},
                {name: "Machakos"},
                {name: "Garissa"},
                {name: "Embu"}
            ]
        }
    }
};
</script>

<style>
option {
    color: var(--blue);
    border-bottom: 1px solid gainsboro;
}
option:hover {
    color: white;
    background: var(--blue);
}
</style>
