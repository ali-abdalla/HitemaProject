<template>
  <v-container class="fill-height">
    <v-layout column class="fill-height">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12" color="#DCDCDC">
                <v-toolbar dark color="#DCDCDC">
                  <v-toolbar-title>Chat</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-list ref="chat" id="logs">
                    <template v-for="message in messages">
                      <v-subheader v-if="message" :key="message">
                        <strong>{{ message.username }}: </strong> 
                        {{ message.text }}
                      </v-subheader>
                    </template>
                  </v-list>
                </v-card-text>
                <v-flex>
                  <v-card-actions>
                    <v-container>
                      <v-row>
                        <v-col>
                          <v-form @submit.prevent="sendMessage">
                            <v-text-field
                              v-model="showMessage"
                              label="Message"
                              single-line
                              solo-inverted
                            ></v-text-field>
                            <v-btn fab dark small color="primary" type="submit">
                              <v-icon dark>send</v-icon>
                            </v-btn>
                          </v-form>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-actions>
                </v-flex>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-layout>
  </v-container>
</template>

<script>
import fire from "../../fire";
import { mapGetters } from "vuex";
export default {
  name: "Message",
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  data() {
    return {
      showMessage: "",
      messages: [],
    };
  },
  methods: {
    updateUsername() {},
    sendMessage() {
      const message = {
        text: this.showMessage,
        username: this.user.data.displayName,
      };
      fire.database().ref("messages").push(message);
      this.showMessage = "";
    },
  },
  mounted() {
    let viewMessage = this;
    const itemsRef = fire.database().ref("messages");
    itemsRef.on("value", (snapshot) => {
      let data = snapshot.val();
      let messages = [];
      console.log(data);
      Object.keys(data).forEach((key) => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text,
        });
      });
      viewMessage.messages = messages;
    });
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons");

.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}
</style>

