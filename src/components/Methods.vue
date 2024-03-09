<template>
  <div>
    <h1>Click button</h1>
    <h1 id="count_box">{{ count }}</h1>
    <button @click="increment(1)" class="click_button">Increment by 1</button>
    <button @click="decrement(1)" class="click_button">decrement by 1</button>
    <!-- <button @click="count++" class="click_button" >Increment by 1</button>
    <button @click="count--" class="click_button">decrement by 1</button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      count:0,
    };
  },
 
  methods: {
    increment(e) {
      this.count += e;
      console.log(this.count);

    }, 
    decrement(e) {
      if(this.count > 0){
        this.count -= e;
        console.log(this.count);
      }      
    },
  },
  

    }

</script>

<style>
body{
  background: rgb(233, 197, 197);
  color: white;
}
.click_button{
  height: 30px;
  width: 130px;
  background: rgb(82, 66, 66);
  color: white;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
}
#count_box{
border: 1px solid ;
width: 100px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
color: white;
background: rgb(110, 87, 87);

}
</style>