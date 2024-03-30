<template>
  <div>
   
    <button @click="emitcall" >Call Emit</button>
  </div>
</template>

<script>
export default {
  methods: {
   
      emitcall() {
        // console.log("working on ti");
        this.$emit("parentcall","Parent update");
      },
    
  },
};
</script>

<style scoped></style>
