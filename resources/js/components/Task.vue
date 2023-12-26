<!-- resources/js/components/Task.vue -->

<template>
    <div>
      <h2>Task Details</h2>
      <p>Name: {{ task.name }}</p>
      <p>Description: {{ task.description }}</p>
      <router-link to="/tasks">Back to Task List</router-link>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        task: {},
      };
    },
    created() {
      // Fetch the task details using an API call based on the route parameter
    },
  };
  </script>

  <style scoped>
  /* Add your component styles here */
  </style>
