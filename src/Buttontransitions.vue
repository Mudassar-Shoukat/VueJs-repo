<template>

    <div id="app">
       <div class="isShowing" > 
        <h3>Click Button</h3>
        <button @click="toggleShow">
          <span v-if="isShowing">Hide Popup</span>
          <span v-else>Show popup</span>
        </button>
      </div>
      <transition>
        <span v-show="isShowing" class="modal">
          <span>Are you sure you want to delete this box?</span>
          <button @click="toggleShow">Delete</button>
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
    },
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
  background: rgb(252, 250, 250);

}
button {
  background: rgb(228, 221, 221);
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
  background: rgb(237, 241, 241);
  color: black;
  padding: 20px;
  width: 200px;
  position: absolute;
}
</style>
