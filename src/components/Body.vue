<template>
    <div id="wrapper">

        <button v-for="n in 170" :key="n">{{ n }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<style scoped>
#wrapper {
    background: rgb(187, 206, 156);
    display: flex;
    flex-wrap: wrap;
}

button {
    border: 1px solid gray;
    border-radius: 3px;
    margin: 10px;
    padding: 10px;
    background-color: rgb(159, 188, 159);
}
</style>