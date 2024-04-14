<template>
  <v-app>
    <AppSidebar></AppSidebar>
    <v-app-bar app>
      <v-toolbar-title>{{ currentRouteTitle }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue';

export default {
  components: {
    AppSidebar
},
  computed: {
    currentRouteTitle() {
      return this.$route.name;
    }
  }
}
</script>
