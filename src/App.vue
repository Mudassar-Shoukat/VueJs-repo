<template>
  <div id="nav">
    <router-link :to="{name:'Home'}"   class="link">Home</router-link> 
    <router-link :to="{ name:'Login'}"   class="link">Login</router-link>
    <router-link :to="{ name:'Buttontransitions' }"   class="link">Buttontransitions</router-link>
<router-view/> 
  </div>
</template>
<script>
  export default {
    name:'App',
  }
</script>

<style  scoped>
.link{
  color: rgb(56, 14, 14);
  margin: 13px;
}
.link:hover{
color: rgb(218, 19, 19);
  
}
</style>