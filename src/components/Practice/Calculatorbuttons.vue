<template>
  <div>
    <button v-for="n in buttons" :key="n" @click="handleInput(n)" id="keys">{{ n }}</button>
  </div>
</template>

<script>
export default {
  props: {
    currentValue: String,
  },
  data() {
    return {
      buttons: [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        'C', '0', '.', '=',
      ],
    };
  },
  methods: {
    handleInput(value) {
      if (value === 'C') {
        // console.log("press C key");
        this.$emit('input-value', ''); 
      } else if (value === '=') {
        // console.log("press = key");
        this.$emit('calculate'); 
      } else {
        this.$emit('input-value', value); 
        
      }
    },
  },
};
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
