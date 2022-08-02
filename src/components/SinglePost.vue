<template>
  <div class="post">
    <div class="img-hover-zoom">
        <router-link :to="{ name: 'Details', params: {id: post.id}}">
            <img class="pic" src="../assets/freeStock/img3.jpeg">
            <h3>{{ post.title }}</h3>  
        </router-link>
        
        <p>{{ snippet }}</p>
        <div class="tag">
            <span v-for="tag in post.tags" :key="tag">
                #{{ tag }}
            </span>
        </div>
    </div>
    </div>

</template>

<script>
import { computed } from 'vue'

export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0, 272) + '...'
        })
        return { snippet }
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
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
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
    padding-left: 230px;
}
.img-hower-zoom {
    float: left;
    height: 240px;
    overflow: hidden;
}
.img-hover-zoom {
  transition: transform .35s ease;
}
.img-hover-zoom:hover  {
  transform: scale(1.1);
}
</style>