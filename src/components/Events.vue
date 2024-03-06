<template>

    <div>
        <h3>Increment Button</h3>
        <button @click="increment()">{{ `Increment is ${num}` }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0,
        }
    },
    methods: {
        increment() {
            this.num++;
            if (this.num >= 10) {
                alert("This number is greater than 10 number ");
                this.num = 0;
            }
            console.log(this.num);
        }
    },
}
</script>

<style scoped></style>