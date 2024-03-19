<template>
  <div id="calculator">
    <Calculatorscreen :current-value="currentValue" @input-value="handleInputValue" />
    <Calculatorbuttons :current-value="currentValue" @input-value="handleInputValue" 
     @calculate="calculateResult"/>
  </div>
</template>

<script>
import Calculatorscreen from "./components/Calculatorscreen.vue";
import Calculatorbuttons from "./components/Calculatorbuttons.vue";

export default {
  components: {
    Calculatorscreen,
    Calculatorbuttons,
  },
  data() {
    return {
      currentValue: "",
      previousValue: "",
      operator: "",
    };
  },
  methods: {
    handleInputValue(value) {
      console.log(value);
      this.currentValue += value;
     
    },
    calculateResult() {
      if (this.operator && this.previousValue !== null) {
        let result;
        switch (this.operator) {
          case "+":
            result =
              parseFloat(this.previousValue) + parseFloat(this.currentValue);
             
            break;
          case "-":
            result =
              parseFloat(this.previousValue) - parseFloat(this.currentValue);
              
            break;
          case "*":
            result =
              parseFloat(this.previousValue) * parseFloat(this.currentValue);
            break;
          case "/":
            if (this.currentValue === "0") {
              result = "Error: Division by zero";
            } else {
              result =
                parseFloat(this.previousValue) / parseFloat(this.currentValue);
            }
            break;
          default:
            break;
        }
        this.currentValue = result.toString();
        this.previousValue = null;
        this.operator = null;
      }
    },
    
  },
};
</script> 



<style scoped>
#calculator {
  background-color: #cdd2a2;
  border-radius: 5px;
  padding: 1em 1em 1em 1em;
  margin: 10px auto;
  width: 300px;
  display: table;
}
</style>
