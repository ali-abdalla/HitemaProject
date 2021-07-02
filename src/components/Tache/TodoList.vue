<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>{{ listName }}</h1>
      </div>
    </div>
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
import {db } from "../../main.js"

export default {
  props: {
    listName: String,
  },
  data() {
    return {
      todos: [],
    };
  },
  created: function() {
      db.collection('message').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let item = doc.data()
          item.id = doc.id
          console.log(item.text)
          this.todos.push({ description: item.text, completed: item.completed, createdAt: item.createdAt})
        })
      })},
  methods: {
    addTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: newTodo.completed, createdAt: new Date() });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
    },
  },
  components: { Todo, CreateTodo },
};
</script>