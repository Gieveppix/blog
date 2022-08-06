<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
        <button class="delete" @click="handleClick">Delete Post</button>
    </div>
    <p v-else>
        <Spinner />
    </p>
</template>

<script>
import getPost from '../composables/getPost.js'
import Spinner from '@/components/Spinner.vue'
import { useRoute, useRouter  } from 'vue-router';
import { projectFirestore } from '@/firebase/config.js';

export default {
    props: ["id"],
    components: { Spinner },
    setup(props) {
        const route = useRoute()
        const router = useRouter()

        const { post, error, load } = getPost(route.params.id); //same as getPost(props.id)
        load();

        const handleClick = async () => {
            await projectFirestore.collection('posts')
            .doc(props.id)
            .delete()

            router.push({ name: 'Home' })
        }

        return { post, error, handleClick };
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
button.delete {
    float: right;
}
button.delete:hover {
    -webkit-transition: background 0.15s;
    transition: background 0.15s;
    background: red;
}

</style>