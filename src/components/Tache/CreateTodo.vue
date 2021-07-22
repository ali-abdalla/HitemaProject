<template>
  <form class="col-12 col-sm-10 col-md-8 cl-lg-6" @submit.prevent="addTodo()">
    <input
      v-model="newTodo"
      type="text"
      class="form-control"
      placeholder="Create a new to-do..."
    />
  </form>
</template>

<script>
import { todosCollection } from "../../fire";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      newTodo: "",
      errors: "",
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    addTodo() {
      todosCollection
        .add({
          text: this.newTodo,
          completed: false,
          createdAt: new Date(),
          writted: this.user.data.displayName,
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });

      if (this.newTodo.length > 0) {
        this.$emit("on-new-todo", this.newTodo);
      }
    },
  },
};
</script>