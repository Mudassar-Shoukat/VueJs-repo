<template>
  <div id="propsbox">
    <h1>{{ name }}</h1>
    <p>{{ price }}</p>
  </div>
</template>

<script>
export default {
  // props: ["name", "price"],
  props:{
    name:String,
    price:Number,
  }
};
</script>

<style scoped>
#propsbox {
  height: 100px;
  width: 220px;
  background: rgb(228, 221, 221);
  margin: 10px;
  border-radius: 5px;
  border: 1px solid rgb(158, 170, 158);
  padding: 10px;
}
</style>
