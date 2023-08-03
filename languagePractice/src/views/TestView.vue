<template>
    <form @submit.prevent="submitForm">
      <label for="username">Username:</label>
      <input type="text" v-model="formData.username" required><br>
  
      <label for="email">Email:</label>
      <input type="email" v-model="formData.email" required><br>
      <label for="password">Password:</label>
      <input type="password" v-model="formData.password" required><br>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          username: '',
          email: '',
          password: '',
        }
      };
    },
    methods: {
      submitForm() {
        const jsonData = JSON.stringify(this.formData);
        this.sendDataToAPI(jsonData);
      },
      sendDataToAPI(jsonData) {
        const apiUrl = 'http://localhost:1337/register';
  
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: jsonData
        })
        .then(response => response.json())
        .then(data => {
          console.log('API Response:', data);
        })
        .catch(error => {
        console.error('Error:', error);
        });
      },

    }
  };
  </script>
  