<template>
  <div class="post">
    <div>
      <div class="date">{{ post.post_date }}</div>
      <router-link :to="{ name: 'Details', params: { id: post.id } }">
        <div class="img-hover-zoom">
          <img class="pic" :src="post.img" />
        </div>
        <h3>{{ post.title }}</h3>
      </router-link>
    </div>

    <p class="snipp">{{ snippet }}</p>
    
    <!-- TODO: Add router link to all author posts -->
    <router-link :to="{ name: 'Author', params: { author: currentAuthor } }">
      <div class="author">{{currentAuthor}}</div>
    </router-link>
    
    <div class="tag" v-for="tag in post.tags" :key="tag">
      <span>
        <router-link :to="{ name: 'Tag', params: { tag: tag } }">
          <div class="hover-link">#{{ tag }}</div>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>

import { computed, onBeforeMount, ref } from "vue";
import handleUseTags from "../composables/tagJs/handleUseTags";
import { usePostsStore } from "@/stores/posts";

import { useRouter } from "vue-router";

export default {
  props: ["post", "posts"],
  setup(props) {
    const router = useRouter();
    try {
    const { tags } = handleUseTags(props.posts);
    const snippet = computed(() => {
      return props.post.body.substring(0, 315) + "...";
    });

    const postsStore = usePostsStore();

    let currentAuthor = null;

    let i = null;
    
    for (i = 0; i < postsStore.posts.length; i++) {
      if(props.post.id == postsStore.posts[i].id){
        break;
      }
    }
    if(postsStore.posts[i].users_id) {
      currentAuthor = props.post.user_name;
    }

    return { snippet, tags, currentAuthor };
    }
    catch(err) {
      router.go( {path: `/`});
    }
  },
};
</script>

<style>
.post {
  margin: 0px 0 30px;
  padding-bottom: 25px;
  border-bottom: 1px #e7e7e7;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 590px;
}
.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: rgb(67, 67, 67);
  position: absolute;
  z-index: -1;
  padding-right: 45px;
  left: -35px;
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
  letter-spacing: 0.01875rem;
  background-color: #f1eefc;
  padding: 0.5625rem 0.5rem;
  margin-right: 1rem;
}
.img-hover-zoom {
  float: left;
  display: block;
  height: 240px;
}
.img-hover-zoom {
  transition: transform 0.35s ease;
  overflow: hidden;
}
.img-hover-zoom:hover {
  transform: scale(1.02);
}
.snipp {
  font-size: large;
}
.date {
  float: right;
  margin-top: 33px;
  font-size: 16px;
}
.author {
  float: right;
  margin-top: 8px;
  cursor: pointer;
  color: #7057dc;
}
</style>
