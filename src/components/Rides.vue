<template>
    <li class="list-group-item mb-1">
        <b-row>
            <b-col>
                <div class="first">from: Nairobi</div>
                <div>to: Kisumu</div>
            </b-col>
            <b-col class="bg-lightish text-center">
                <b-row>
                    <b-col class="border-right">
                        Total slots: <br> 14
                    </b-col>
                    <b-col>
                        Available <br> 10
                    </b-col>
                </b-row>
            </b-col>
            <b-col class="text-right">
                <div class="first">departure: mon 23 2018</div>
                <div>departure: mon 23 2018</div>
            </b-col>
            <b-col class="d-flex align-content-center">
                <div class="view-summary my-auto">
                        <b-btn class="view btn-primary btn btn-sm">
                        <i class="icon-plus icons"> </i> subscribe</b-btn>
                </div>
            </b-col>
        </b-row>
    </li>
</template>

<script>
export default {};
</script>

<style>
.first {
  border-bottom: 1px solid gainsboro;
}
.list-group,
.list-group-item {
  border: none;
}
.border-right {
  border-right: 1px solid white;
}
.view{
   border-radius: 0px;
}
#dashboard .list-group-item {
    box-shadow:  inset 0 0 6px gainsboro;
    border-radius: 0px;
}
</style>
