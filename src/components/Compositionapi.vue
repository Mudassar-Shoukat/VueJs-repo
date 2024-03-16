<template>
  <div id="Composition_main">
    <h2>Example of Composition API</h2>
    <p>Decrement of Number : {{decrement }}</p>
    <button @click="remove" > Remove one Value</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const decrement = ref(10);

function remove() {
  if (decrement.value > 0) {
    decrement.value--;
  }
}
</script>

<style>
#Composition_main {
  background: rgb(245, 240, 240);
  height: 120px;
}
</style>
