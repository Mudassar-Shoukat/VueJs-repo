<template>
  <div>
    <Headercomponent></Headercomponent>
    <Bodycomponent></Bodycomponent>
    <Footercomponent></Footercomponent>

  </div>
</template>

<script>
import Headercomponent from './components/Header.vue'
import Bodycomponent from './components/Body.vue'
import Footercomponent from './components/Footer.vue'
export default {
  components: {
    Headercomponent, Bodycomponent, Footercomponent,
  },
};
</script>
