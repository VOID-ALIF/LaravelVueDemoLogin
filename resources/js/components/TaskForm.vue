

<template>
    <div>
      <h2>{{ formTitle }}</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" v-model="task.name" required>
        <br>
        <label for="description">Description:</label>
        <textarea v-model="task.description" required></textarea>
        <br>
        <button type="submit">Save</button>
        <router-link to="/tasks">Cancel</router-link>
      </form>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      task: {
        name: '',
        description: '',
      },
    };
  },
  computed: {
    formTitle() {
      return this.$route.name === 'tasks.create' ? 'Add Task' : 'Edit Task';
    },
  },
  methods: {
    async submitForm() {
      try {
        if (this.$route.name === 'tasks.create') {
          await axios.post('/api/tasks', this.task);
        } else {
          await axios.put(`/api/tasks/${this.$route.params.id}`, this.task);
        }
        this.$router.push('/tasks');
      } catch (error) {
        console.error('Error saving task:', error);
      }
    },
    async fetchTaskDetails() {
      try {
        const response = await axios.get(`/api/tasks/${this.$route.params.id}`);
        this.task = response.data;
      } catch (error) {
        console.error('Error fetching task details:', error);
      }
    },
  },
  created() {
    if (this.$route.name === 'tasks.edit') {
      this.fetchTaskDetails();
    }
  },
};
</script>
  <style scoped>
  /* Add your component styles here */
  </style>
