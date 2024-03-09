<template>
    <div>
      <div id="click_event">
      <h3> Click Event</h3>
      <button @click="increment()" >{{ `Increment is: ${num}` }}</button>
    </div>
    <div id="keyboard_event">
      <h3>Keyborad Event</h3>
      <span> Enter name of User:  <input type="text" v-on:keydown="down" ></span>
      <h2 >Press key is:- {{ KeyboardEvent }}</h2>
    </div>
    
    </div>
    
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        num: 0,
        KeyboardEvent:"",
        
      };
    },
    methods: {
      // This code is used for click event in vue js 2
      increment() {
        this.num += 1;
        if (this.num >= 10) {
          alert("This number is greater than 10.");
          this.num = 0;
        }
        console.log(this.num);
      },
        // This code is used for keyboard event in vue js 2
        down(enterkey){
          this.KeyboardEvent=enterkey.key,
          console.log(enterkey.key);
        }
    },
  };
  </script>
  

<style>
#click_event{
  margin-left: 5px;
  background: rgb(222, 212, 212);
  height: 100px;

  
  
}
#keyboard_event{
  margin-left: 5px;
  background: rgb(234, 229, 229);
  height: 100px;
  
}

</style>