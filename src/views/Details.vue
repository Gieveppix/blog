<template>
  <div class="top">
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button class="delete" @click="handleDelete">DELETE POST</button>
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

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const { post, error, load } = handleGetPost(props.id); //same as handleGetPost(route.params.id)
    load();

    const router = useRouter();
    const { deletePost } = handleDeletePost(props.id, router);

    return { post, error, deletePost };
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
</style>
