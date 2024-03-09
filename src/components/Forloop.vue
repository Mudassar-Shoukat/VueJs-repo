<template>
    <div id="app">
<h2>example of for loop </h2>
<div id="content" >
    <p v-for="n in Items" :key="n"> {{ n.name }} "</p>

</div>
    </div>
</template>

<script>
    export default {
        data() {
    return {
      Items: [
        {name: 'Laptop', price:"20000", quantity:"10" },
        {name: 'keyboard', price:"4540", quantity:"4" },
        {name: 'Cake', price:"1000", quantity:"5" },
        {name: 'Mouse', price:"900", quantity:"8" },
        {name: 'USB', price:"450", quantity:"20" },
        {name: 'Pizza', price:"3500", quantity:"5" },
        {name: 'Rice', price:"350", quantity:"1" }
      ]
    }
   }
    }
</script>

<style>
  #app {
      border: solid rgb(194, 176, 176) 1px;
      width: 80%;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    #content {
      width: 100px;
      padding: 10px;
      margin: 10px;
      background-color: rgb(79, 114, 136);
      color: white;
      /* border-radius: 5px; */
    }

</style>