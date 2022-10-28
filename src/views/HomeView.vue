
<template>
  <div class="home">
 
    <form @submit.prevent="sendData">
      <div class="form-control">
        <label for="name">Name</label>
         <input v-model="data.name" id="name" type="text">
       </div>
       <div class="form-control">
         <label for="email">Email</label>
         <input v-model="data.email" id="email" type="email">
       </div>
       <div class="form-control">
         <label for="address">Address</label>
         <input v-model="data.address" id="address" type="text">
       </div>
       <div class="form-control">
         <label for="gender">Gender</label>
        <span>Male <input v-model="data.gender" id="gender" type="radio" value="male"></span>
         <span>Female <input v-model="data.gender" id="gender" type="radio" value="female"></span>
       </div>
     <input type="submit" class="send" value="Send">
    </form>
  </div>
 </template>

 <script setup>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

 const data = reactive({
       name: '',
       email: '',
       address: '',
       gender: '',
      })
  
      function sendData() {
        console.log(data);
      }

    

  </script>

  <style>
  .form-control {
     padding: 5px;
    } 
    .form-control label {
       display: block;
    }
    .send {
       margin: 5px
      }
  </style>