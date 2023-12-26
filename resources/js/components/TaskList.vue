<template>
    <div>
      <h2>Task List</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          {{ task.name }} - {{ task.description }}
          <button @click="editTask(task)">Edit</button>
          <button @click="deleteTask(task.id)">Delete</button>
        </li>
      </ul>
      <router-link to="/tasks/create">Add Task</router-link>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get('/api/tasks');
        this.tasks = response.data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    editTask(task) {
      this.$router.push({ name: 'tasks.edit', params: { id: task.id } });
    },
    async deleteTask(id) {
      try {
        await axios.delete(`/api/tasks/${id}`);
        this.fetchTasks();
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>

  <style scoped>
  /* Add your component styles here */
  </style>
