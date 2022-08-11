<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button class="delete" @click="handleDelete">DELETE POST</button>
  </div>
  <p v-else>
    <Spinner />
  </p>
</template>

<script>
import getPost from "../composables/getPost.js";
import Spinner from "@/components/Spinner.vue";
import { useRouter } from "vue-router";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
   
   //const route = useRoute();
    
    const router = useRouter();
    
    // console.log(route)
    // console.log(props)
    
    const { post, error, load } = getPost(props.id); //same as getPost(route.params.id)
    load();

    const handleDelete = async () => {
      try {
        let data = await fetch(
          "http://localhost:3000/posts/" + props.id
        );
        if (!data.ok) {
          throw Error("that post does not exist");
        }
        post.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
      await fetch("http://localhost:3000/post/" + props.id, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      });
      console.log("DELETING post: " + props.id);
      router.push({ name: "Home" });
    };

    return { post, error, handleDelete };
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
