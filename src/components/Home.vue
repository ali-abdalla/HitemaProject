<template>
  <div>
    <h1 class="text-center">Les modules disponibles</h1>
    <v-card class="mx-auto my-12" max-width="374">
      <v-card-title>Chat</v-card-title>
      <v-card-text
        >Le but de ce module est de créer un chat interne à l’entreprise ou tous
        les employés peuvent communiquer entre eux et d’échanger des
        informations entre eux.</v-card-text
      >
      <v-card-actions v-if="user.loggedIn">
        <v-btn color="deep-purple lighten-2" text >
          <router-link to="/message">message</router-link>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto my-12" max-width="374">
      <v-card-title>Calendar</v-card-title>
      <v-card-text
        >Le principe de ce module est de permettre à toutes employé d’une
        entreprise d’organiser une réunion. C’est-à-dire choisir qui y participe
        à quelle heure et dans quelle salle.</v-card-text
      >
      <v-card-actions v-if="user.loggedIn">
        <v-btn color="deep-purple lighten-2" text >
          <router-link to="/Calendar">Calendar</router-link>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto my-12" max-width="374">
      <v-card-title>Todo</v-card-title>
      <v-card-text
        >Liste de tâches, est un procédé qui se veut simple et efficace pour
        gérer les tâches d'un projet.</v-card-text
      >
      <v-card-actions v-if="user.loggedIn">
        <v-btn color="deep-purple lighten-2" text >
          <router-link v-if="user.loggedIn" to="/todolist">Todo</router-link>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {

  name: "home",
    computed: {
    ...mapGetters({
      user: "user"
    })
  },
};
</script>