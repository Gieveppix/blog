<template>
  <div class="post">
    <div>
        <router-link :to="{ name: 'Details', params: {id: post.id}}">
        <div class="img-hover-zoom">
            <img class="pic" src="../assets/freeStock/img3.jpeg">
        </div>
            <h3>{{ post.title }}</h3>  
        </router-link>
    </div>
        
        <p>{{ snippet }}</p>
        <!-- <div class="tag">
            <span  v-for="tag in post.tags" :key="tag">
                #{{ tag }}
            </span>
        </div> -->
        <div class="tag" v-for="tag in tags" :key="tag">
            <span>
                <router-link :to="{ name: 'Tag', params: {tag: tag}}">
                    <div class="hover-link">#{{tag}}</div>
                </router-link>
            </span>
        </div>
    </div>

</template>

<script>
import { computed } from 'vue'
import useTags from '../composables/useTags'

export default {
    props: ['post', 'posts'],
    setup(props) {
        const { tags } = useTags(props.posts)
        const snippet = computed(() => {
            return props.post.body.substring(0, 272) + '...'
        })
        return { snippet, tags }
    }
}
</script>

<style>
.post {
    margin: 0 0px 30px;
    padding-bottom: 60px;
    border-bottom: 1px #e7e7e7;
}
.post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
}
.post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: rgb(67, 67, 67);
    position: absolute;
    z-index: -1;
    padding-right: 46px;
    left: -30px;
}
.pic {
    height: 240px;
    width: 225px;
    float: left;
    padding-right: 30px;
    padding-top: 26px;
}
.tag {
    display: inline-block;
    font-weight: 500;
    letter-spacing: .01875rem;
    background-color: #f1eefc;
    padding: 0.5625rem 0.5rem;
    margin-right: 1rem;
}
.tag a:hover { 
    text-decoration: none;
}
a {
    text-decoration: none;
    color: #7057dc;
}
.img-hover-zoom {
    float: left;
    height: 240px;
    overflow: hidden;
}
.img-hover-zoom {
  transition: transform .35s ease;
}
.img-hover-zoom:hover  {
  transform: scale(1.02);
}

</style>