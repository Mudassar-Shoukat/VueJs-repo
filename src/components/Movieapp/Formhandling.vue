<template >
  <div class="main" >
    <h3>First Submit Form in vue js</h3>
    <!-- form in vue js 3 -->
    <form @submit.prevent="submit_form">
      <!-- user first name -->
      <input
        placeholder="Enter First Name"
        v-model.trim="formvalue.f_name"
        class="input_box"
      />
      <!-- user last name -->
      <input
        placeholder="Enter Last Name"
        v-model.trim="formvalue.l_name"
        class="input_box"
      />
      <!-- user email -->
      <input
        type="email"
        placeholder="Enter Email Adress"
        v-model.trim="formvalue.email"
        class="input_box"
      />
      <!-- user select course -->
      <select v-model="formvalue.select" class="input_box">
        <option value="">Select any course...</option>
        <option>Node.js</option>
        <option>React</option>
        <option>Vue.js</option>
      </select>
      <!-- user select date -->
      <input type="date" v-model="formvalue.date" class="input_box" />
      <!-- user select male or female-->
      <div style="width: 220px">
        <input
          type="radio"
          name="gender"
          value="Male"
          v-model="formvalue.gender"
        />Male
        <input
          type="radio"
          name="gender"
          value="Female"
          v-model="formvalue.gender"
        />Female
      </div>
      <!-- user type address-->
      <textarea
        v-model="formvalue.address"
        placeholder="Type Your Address"
      ></textarea>

      <button type="submit">Submit Form</button>
    </form>

    <!-- Get post in vue js3 -->
   
  </div>
</template>

<script>
import axios from "axios";
export default {
 
  data() {
    return {
      formvalue: {
        f_name: "",
        l_name: "",
        email: "",
        select: "",
        date: "",
        gender: "",
        address: "",
      },
    };
  },
  methods: {
    submit_form() {
      // Post request in axios...........
      axios.post('https://jsonplaceholder.typicode.com/posts',this.formvalue)
      .then((response) => console.log(response))
    },
  },
};
</script>

<style scoped>


/* Main container styling */
.main {
  background-color: #f5f6f8;
  border-radius: 10px;
  box-shadow: 0 0 10px #dbd9df;
  padding: 10px;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3px;
}

h1,
h3 {
  text-align: center;
  color: #160c01;
}

button {
  background: #ecedf1;
  height: 30px;
  width: 130px;
  border: 1px solid #aeb0bd;
  /* box-shadow: 0px 0px 21px -1px #c7c8d3; */
  cursor: pointer;
  margin-top: 12px;
}

.input_box {
  padding: 10px;
  width: 220px;
  margin: 2px;
  border: 1px solid #b8b7cf;
  border-radius: 5px;
}

textarea {
  height: 50px;
  width: 220px;
  outline: none;
}

select {
  outline: none;
}

input {
  outline: none;
}

</style>
