<template>
    <div>
        <button @click="getpost" id="getpost" > Get posts in axios</button>

        <div v-for="post in posts" :key="post.id" id="getdata">
            <h1>{{ post.id }} {{ post.title }}</h1>
            <p id="paragraph">{{ post.body }}</p>
            <hr>

        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            posts: []
        }
    },
    methods: {
        getpost() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(((Response) => {
                    console.log(Response.data)
                    this.posts = Response.data
                }))
        }
    },

}
</script>

<style scope>
#getpost {
    color: white;
    background: rgb(67, 5, 5);
    width: 100%;

}

#getdata {
    background: rgb(170, 165, 164);
}

#paragraph {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-wrap: wrap;
    font-size: large;
}
</style>