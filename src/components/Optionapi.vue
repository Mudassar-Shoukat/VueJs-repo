<template>
  <div id="Option_main">
    <h2>Example of Options API</h2>
    <p>Decement of Number : {{ Decement }}</p>
    <button @click="remove">Remove one Value</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Decement: 10
    };
  },
  methods: {
    remove() {
      if (this.Decement > 0) {
        this.Decement--;
      }
    }
  },

}
</script>
<style scoped>
#Option_main {
  background: rgb(245, 245, 245);
  height: 120px;

}
</style>