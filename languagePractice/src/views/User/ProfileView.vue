<template>
    <h1>Profile</h1>
  </template>
  
  <script>
    export default {
        data() {
            return {
                formData:{
                    username: '',
                    password :'',
                    email : ''
                }
            };

        },
        methods:{
            sendDataToApi(jsonData){
                const apiUrl = 'http://localhost:1337/upadte'
            }
        }
    }
  </script>
  