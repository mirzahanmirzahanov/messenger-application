<template>
  <div class='v-main-wrapper'>
    <v-header/>
    <router-view></router-view>
    <v-footer/>
  </div>
</template>

<script>
import VFooter from './layouts/VFooter.vue';
import VHeader from './layouts/VHeader.vue';
export default {
  components: { VHeader, VFooter },
  name: "v-main-wrapper",
  props: {},
  data: () => ({}),
  computed: {},
};
</script>

<style>
</style>




vv


