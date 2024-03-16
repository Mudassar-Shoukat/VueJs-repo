<template>
 <div id="calculator">
    <Calculatorscreen  />
    <Calculatorbuttons value="keyvalue(n)"/>
  </div>
</template>

<script>
import Calculatorscreen from './components/Calculatorscreen.vue';
import Calculatorbuttons from './components/Calculatorbuttons.vue';

export default {
  components: {
    Calculatorscreen,
    Calculatorbuttons,
  },
  
};
</script>

<style scopped>
#calculator{
  
  background-color: #cdd2a2;
  border-radius: 5px;
  padding: 1em 1em 1em 1em;
 margin: 10px auto ;
 



  width: 300px;
  display: table;
}
  
</style> 


 
