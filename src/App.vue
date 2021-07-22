<template>
  <v-app>
    <v-app-bar
      app
      color="#DCDCDC"
    >

        
        <router-link dark v-if="user.loggedIn" to="/"><v-icon > mdi-arrow-left </v-icon></router-link>
      <v-spacer></v-spacer>
      <navbar />
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import navbar from "../src/components/Navbar";
import { mapGetters } from "vuex";
export default {
  name: 'App',
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  components: {
    navbar
  },
};
</script>
