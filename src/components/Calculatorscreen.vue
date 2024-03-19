<template>
  <div class="screen">
    <input type="text" :value="currentValue" />
  </div>
</template>

<script>
export default {
  props: {
    currentValue: String,
  },
};
</script>


<style scoped>
.screen input {
  height: 36px;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  margin: 0 0 14px 0;
  padding: 0 1em;
  border: none;
}
</style>
