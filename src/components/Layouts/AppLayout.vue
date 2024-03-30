<template>
    <div>
       <!-- Header -->
<slot />

             <!-- Footer -->
    </div>
</template>

<script>
import Header from '../Header.vue'


export default {
    components:{
        Header
    }
    }
</script>

<style lang="scss" scoped>

</style>