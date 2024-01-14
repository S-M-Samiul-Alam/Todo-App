<!-- src/App.vue -->

<template>
    <div>
      <h1>Todo List</h1>
      <form @submit.prevent="addTodo">
        <label>
          Title:
          <input v-model="newTodo.title" required />
        </label>
        <label>
          Description:
          <textarea v-model="newTodo.description"></textarea>
        </label>
        <label>
          Due Date:
          <input type="date" v-model="newTodo.dueDate" />
        </label>
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.title }} - {{ todo.description }} - {{ todo.dueDate }}
          <input type="checkbox" v-model="todo.completed" @change="toggleCompleted(todo)" />
          <button @click="deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        todos: [],
        newTodo: { title: '', description: '', dueDate: '' },
      };
    },
    mounted() {
      this.loadTodos();
    },
    methods: {
      async loadTodos() {
        const response = await axios.get('http://localhost:3000/api/todos/get');
        this.todos = response.data;
      },
      async addTodo() {
        await axios.post('http://localhost:3000/api/todos/add', this.newTodo);
        this.newTodo = { title: '', description: '', dueDate: '' };
        this.loadTodos();
      },
      async toggleCompleted(todo) {
        await axios.put(`http://localhost:3000/api/todos/updateTodo/${todo.id}`);
        this.loadTodos();
      },
      async deleteTodo(id) {
        await axios.delete(`http://localhost:3000/api/todos/deleteTodo/${id}`);
        this.loadTodos();
      },
    },
  };
  </script>
  
<style>
   body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .container {
    max-width: 600px;
    margin: 20px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  textarea,
  button {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 10px;
    background-color: #fff;
  }

  li div {
    padding: 15px;
  }

  li div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }

  li input[type="checkbox"] {
    margin-right: 10px;
  }

  button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 4px;
  }

  button:hover {
    background-color: #c82333;
  } 
</style>