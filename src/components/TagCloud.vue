<template>
    <div class="tag-cloud">
        <h3></h3>
        <div v-for="tag in tags" :key="tag">
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
    padding: 10px;
    display: block;
}
.tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
}
.tag-cloud div {
    display: inline-block;
    font-weight: 500;
    letter-spacing: .01875rem;
    background-color: #f1eefc;
    padding: 0.5625rem 0.5rem;
    margin-right: 1rem;
}
.tag-cloud a {
    text-decoration: none;
}
a {
    text-decoration: none;
    color: #7057dc;
}

.hover-link:hover {
    -webkit-transition: color 0.33s;
    transition: color 0.33s;
    color: #7057dc;
}
</style>