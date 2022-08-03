<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
    <p v-else>
        <Spinner />
    </p>
</template>

<script>
import getPost from '../composables/getPost.js'
import Spinner from '@/components/Spinner.vue'
import { useRoute  } from 'vue-router';

export default {
    props: ["id"],
    components: { Spinner },
    setup(props) {
        const route = useRoute()
        // console.log(route)
        // console.log(props)
        const { post, error, load } = getPost(route.params.id); //same as getPost(props.id)
        load();
        return { post, error };
    },
}
</script>

<style scoped>
.tags a {
    margin-right: 10px;
}
.post {
    max-width: 1200px;
    margin: 0 auto;
}
.post p {
    color: rgb(67, 67, 67);
    line-height: 1.5em;
    margin-top: 40px;
}
.pre {
    white-space: pre-wrap;
}
</style>