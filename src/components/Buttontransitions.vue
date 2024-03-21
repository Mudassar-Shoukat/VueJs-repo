
<template>
  <div id="app" @click="handleClick">
    <h3>Click Button</h3>
    <button @click="toggleShow">Show Modal</button>
    <transition >
      <span v-show="isShowing" class="modal" id="model">
        <span>Are you sure you want to delete this box?</span>
        <button @click="deleteItem" id="deletebutton">Delete</button>
      </span>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowing: false,
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
      document.body.style.backgroundColor = 'rgb(242, 238, 238)';
      document.body.style.transition = 'background-color 2s ease';
    },
    handleClick(event) {
      
      if (
        !this.$el.contains(event.target) ||event.target.id==="app" ||event.target.id==="model"
        
      ) {
        this.isShowing = false;
        document.body.style.backgroundColor = 'white';
        console.log("Clicked outside of modal or button");
      }
    },
    deleteItem() {
      console.log("Delete confirmed");
      this.isShowing = false; 
      document.body.style.backgroundColor = 'white';
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClick); 
  },
 
};
</script>

<style scoped>
#app {
  text-align: center;
  margin: auto;
  max-width: 370px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(242, 238, 238);
}

button {
  background: rgb(213, 205, 205);
  padding: 10px 15px;
  margin: 0 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

h4 {
  margin: 0 0 15px;
}

.modal {
  background: rgb(225, 230, 230);
  color: black;
  padding: 30px;
  width: 200px;
  position: absolute;
}
#deletebutton{
  background:  rgb(209, 213, 213);
  width: 130px;
}
</style>
