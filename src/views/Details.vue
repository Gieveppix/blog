<template>
  <div class="top">
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button class="delete" @click="deletePost" v-show="showDelete">DELETE POST</button>
    </div>
    <p v-else>
      <Spinner />
    </p>
  </div>
</template>

<script>
import handleDeletePost from "../composables/postJs/handleDeletePost.js";
import handleGetPost from "../composables/postJs/handleGetPost.js";
import Spinner from "@/components/Spinner.vue";
import { useRouter } from "vue-router";

import { useUserStore } from "@/stores/user.js";
import { usePostsStore } from "@/stores/posts.js";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const userStore = useUserStore();
    const postsStore = usePostsStore()
    let realId = props.id
    let id = null;
    let showDelete = false;

    //console.log("IIIDDD", realId)
    

    // console.log("USSSSER", userStore.user.user_id)
    // console.log("JSONUSSSER", JSON.parse(JSON.stringify(postsStore.posts)))
    //console.log("PROPPPS ID", props.id)
    
    if((userStore.user.user_id) !== false) {

      for(const [index, item] of (JSON.parse(JSON.stringify(postsStore.posts))).entries()) {
        //console.log("ITTEEM", item.id, "     INNDEEEX",index)
        
        //console.log("JSONUSSSER", index, JSON.parse(JSON.stringify(postsStore.posts))[index].id)

        // console.log("PROPPS", index, props.id)
        // console.log("JSON PROPSS", index, JSON.parse(JSON.stringify(postsStore.posts))[index].id)
        // console.log("VALUES",props.id, (JSON.parse(JSON.stringify(postsStore.posts))[index].id));
        // console.log("COMPARISON1", ((props.id) == (JSON.parse(JSON.stringify(postsStore.posts))[index].id)));
        // console.log("COMPARISON2", !((props.id) != (JSON.parse(JSON.stringify(postsStore.posts))[index].id)));
        // console.log("----------------");

        if(((props.id) == (JSON.parse(JSON.stringify(postsStore.posts))[index].id))){
          id = index
          console.log("IDDDDDD", id)
        }
      }
      // console.log(JSON.parse(JSON.stringify(postsStore.posts))[id])
      if ((userStore.user.user_id) === (JSON.parse(JSON.stringify(postsStore.posts))[id].users_id)) {
      showDelete = true
      }
      console.log((userStore.user.user_id), (JSON.parse(JSON.stringify(postsStore.posts))[id].users_id));
      console.log(showDelete)
      
    }
    
    const { post, error, load } = handleGetPost(props.id); //same as handleGetPost(route.params.id)
    load();

    const router = useRouter();
    const { deletePost } = handleDeletePost(props.id, router);
    
    // console.log("USSSER_ID", userStore.user.user_id)
    // console.log("IDDDD", id)
    // console.log(showDelete)

    return { post, error, deletePost, showDelete };
  },
};
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
  margin: auto;
}

@media screen and (max-width: 600px) {
    .post {
      max-width: 400px;
    }
}

@media screen and (max-width: 976px) and (min-width: 600px) {
  .post {
    max-width: 600px;
  }
}

@media screen and (max-width: 1250px) and (min-width: 976px) {
  .post {
    max-width: 900px;
  }
}
</style>
