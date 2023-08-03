<template>
  <form @submit.prevent="submitForm" class="max-w-sm mx-auto mt-10">
    <div class="mb-4">
      <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
      <input type="text" v-model="formData.username" required class="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50" />
    </div>

    <div class="mb-4">
      <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
      <input type="password" v-model="formData.password" required class="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50" />
    </div>


    <div class="flex items-center justify-center">
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-700">Submit</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        username: '',
        password: '',
      }
    };
  },
  methods: {
    submitForm() {
      const jsonData = JSON.stringify(this.formData);
      console.log(jsonData);
      this.sendDataToAPI(jsonData);
    },
    sendDataToAPI(jsonData) {
      const apiUrl = 'http://localhost:1337/user/login';

      axios.post(apiUrl, jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log('API Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },

  }
};
</script>
