<template>
  <div class="container">
    <div class="row mb-3">
      <create-todo @on-new-todo="addTodo($event)" />
    </div>
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in todos"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "../Tache/Todo.vue";
import CreateTodo from "../Tache/CreateTodo.vue";
import {db } from "../../fire.js"
import { mapGetters } from "vuex";

export default {
  props: {
    listName: String,
  },
  data() {
    return {
      todos: [],
    };
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  mounted: function() {
      db.collection('message').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let item = doc.data()
          this.todos.id = doc.id
          this.todos.push({ description: item.text, completed: item.completed, createdAt: item.createdAt,writted:item.writted})
        })
      })},
  methods: {
    addTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: newTodo.completed, createdAt: new Date(),writted:newTodo.writted });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
      db.collection('message').doc(this.todos.id).update({
        completed:todo.completed,
      });
    },
    deleteTodo(deletedTodo) {
      db.collection('message').doc(this.todos.id).delete().then(() => {
        this.todos = this.todos.filter(todo => todo !== deletedTodo);
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    },
    editTodo(todo,newTodoDescription) {
      db.collection('message').doc(this.todos.id).update({
        description:newTodoDescription,
        writted:this.user.data.displayName
      })
      this.todos.description =newTodoDescription;
      this.todos.writted =this.user.data.displayName;
      console.log(todo);
    },
  },
  components: { Todo, CreateTodo },
};
</script>