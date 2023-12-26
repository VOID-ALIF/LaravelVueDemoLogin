<!-- resources/views/Header.vue -->

<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/tasks">Tasks</router-link>
        <router-link to="/logout">Logout</router-link>
      </nav>
    </header>
  </template>
  <router-link to="/logout">Logout</router-link>

  <script>
  export default {
    name: 'Header',
  };
  </script>

  <style scoped>
  /* Add your component styles here */
  </style>
