<template>
    <div>
      <button id="keys" v-for="n in [
          '7', '8', '9', '/',
          '4', '5', '6', '*',
          '1', '2', '3', '-',
          'C', '0', '.', '=',
        ]" :key="n" @click="keyvalue(n)">{{ n }}</button>
       
    </div>
  </template>


 <script>
 export default {
   data() {
    return {
        value(n){
            console.log(n);
            
        }
    }
   },
 }
 </script>

  <style scoped>
  #keys {
    cursor: pointer;
    width: 60px;
    height: 36px;
    font-size: large;
    text-align: center;
    background: white;
    border-radius: 3px;
    border: none;
    margin: 3.5px;
  }
#keys:hover{
    background: rgb(248, 244, 244);
}
  </style>
