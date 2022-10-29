
<template>
  <div class="home">
 
    <form @submit.prevent="sendData">
      <div class="form-control">
        <label for="name">Name</label>
         <input type="text" name="" id="">
       </div>
       <div class="form-control">
         <label for="password">Password</label>
       <input type="text">
       </div>
       
     <button type="submit" class="send" value="Send" />
    </form>
  </div>
 </template>

 <script setup>
  import { reactive } from "@vue/reactivity";
  import { computed } from "@vue/runtime-core";
  import { useUserStore } from "@/stores/state"

  const store = useUserStore()

  const { userData } = store

  function sendData() {
    
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