<template>
  <div class="row">
    <div class="col col-md-4 col-lg-2">
      <sidebar v-if="isNotLogin" />
    </div>
    <div :class="isNotLogin ? 'col col-md-8 col-lg-10' : ''">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import axios from "axios";
export default {
  components: { Sidebar },
  computed: {
    isNotLogin() {
      return this.$route.path !== "/admin" && this.$route.path !== "/";
    },
  },
  mounted() {
    axios;
  },
};
</script>

<style></style>
