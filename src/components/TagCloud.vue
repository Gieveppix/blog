<template>
    <div class="tag-cloud">
        <h3></h3>
        <div class="tag" v-for="tag in tags" :key="tag">
            <router-link :to="{ name: 'Tag', params: {tag: tag}}">
                <div class="hover-link">#{{tag}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import useTags from '../composables/useTags'


export default {
    props: ['posts'],
    setup(props) {
        const { tags } = useTags(props.posts)

        return {tags}
    }
}
</script>

<style>
.tag-cloud {
    padding-bottom: 2rem;
}
.tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
}
a {
    text-decoration: none;
    color: #7057dc;
}
</style>