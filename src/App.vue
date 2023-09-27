<script setup>
import NavMenu from './components/NavMenu.vue';


</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 text-bg-secondary p-4">

            </div>
        </div>
        <div class="row">
            <div class="nav_part text-bg-dark">
                <NavMenu></NavMenu>
            </div>
            <div class="router_view">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>
<style scoped>
.nav_part{
    width: 20%;
    height: 95vh;
}
.router_view{
    width: 80%;
}
</style>