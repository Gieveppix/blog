<template>
    <div class="home">
        <h1 class="homeTitle">#{{titleTag}}</h1>
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
        <PostList :posts="matchingTag" />
        </div>
        <div v-else>
        <Spinner />
        </div>
    </div>
    
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {

    name: 'Tag',
    components: { PostList, Spinner },

    setup() {
        const route = useRoute()
        const { posts, error, load} = getPosts()

        load()

        const matchingTag = computed(() => {
            const calculatedMatchingTag = posts.value.filter((currPost) => currPost.tags.includes(route.params.tag))
            return calculatedMatchingTag
        })
        const titleTag = route.params.tag

        return { matchingTag, titleTag, posts, error }
    }

}
</script>

<style>

</style>