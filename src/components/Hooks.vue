<template>
  <div>
    <h2>Example of Lifecycle Hooks in Vue js3</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Created: "work is create Hook",
      BeforeMounted: "work is BeforMounted Hook",
      Mounted: "work is Mounted Hook ",
      BeforeUpdate: "work is BeforeUpdate Hook",
      Update: "work is Update Hook"
    };
  },
  created() {
    console.log("Value of Created is:", this.Created);
  },
  beforeMount() {
    console.log("Value of BeforeMounted is:", this.BeforeMounted);
  },
  mounted() {
    console.log("Value of Mounted is:", this.Mounted);
  },
  beforeUpdate() {
    console.log("Value of BeforeUpdate is:", this.BeforeUpdate);
  },
  updated() {
    console.log("Value of Update is:", this.Update);
  },

};
</script>

<style scoped></style>
