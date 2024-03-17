<template>
  <div>
    <Props v-for="x in products" :key="x" :name="x.name" :price="x.price" />
  </div>
</template>

<script>
import Props from "./components/Props.vue";
export default {
  components: {
    Props,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Laptop",
          price: 800,
          quantity: 10,
        },
        {
          id: 2,
          name: "Smartphone",
          price: 400,
          quantity: 20,
        },
        {
          id: 3,
          name: "Headphones",
          price: 50,
          quantity: 50,
        },
        {
          id: 4,
          name: "Tablet",
          price: 300,
          quantity: 15,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
