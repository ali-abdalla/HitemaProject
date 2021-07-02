<template>
<div>
     <v-menu offset-y v-if="user.loggedIn"   >
      <template v-slot:activator="{ on, attrs }">
        <v-avatar 
          color="indigo"
          v-bind="attrs"
          v-on="on" 
        >
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>
      </template>
      <v-list>
        <v-list-item>
          {{ user.data.displayName }}
        </v-list-item>
        <v-list-item>
          {{ user.data.email }} 
        </v-list-item>
        <v-list-item>
          <a class="nav-link" @click.prevent="signOut">Sign out</a>
        </v-list-item>
      </v-list>
    </v-menu>
  <template v-else>
    <router-link to="login" class="white--text d-flex justify-center " >Login</router-link>
    <router-link to="register" class="white--text d-flex justify-center ">Register</router-link>
  </template>  
</div>

</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({
            name: "home"
          });
        });
    }
  }
};
</script>