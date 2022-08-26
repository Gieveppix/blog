<template>
  <div class="top">
    <div class="create">
      <form @submit.prevent="addpost">
        <label>Title:</label>
        <input v-model="title" type="text" required autofocus/>

        <label>Content:</label>
        <textarea v-model="body" required></textarea>

        <label>Image link:</label>
        <input v-model="img" type="text" required />

        <label>Tags (press enter to add a tag)</label>
        <input v-model="tag" type="text" @keydown.enter.prevent="addtag" />
        <div
          @click="removetag(index)"
          v-for="(tag, index) in tags"
          :key="tag"
          class="pill pointer"
        >
          #{{ tag }}
        </div>
        <button class="pointer">Add Post</button>
      </form>
      <div class="space"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import handleAddTag from "../composables/tagJs/handleAddTag.js";
import handleRemoveTag from "../composables/tagJs/handleRemoveTag.js";
import handleAddPost from "../composables/postJs/handleAddPost.js";

import { useUserStore } from "@/stores/user.js";

export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);
    const img = ref("");
    
    const userStore = useUserStore();
    let user = userStore.user.user_id

    const addtag = handleAddTag(tags, tag);

    const removetag = (index) => {
      handleRemoveTag(tags, index);
    };

    const router = useRouter();
    const addpost = handleAddPost(router, title, body, tags, img, user);

    return { title, body, tag, tags, img, addpost, addtag, removetag };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: rgb(67, 67, 67);
  position: absolute;
  z-index: -1; /* goes behind label */
  padding-right: 40px;
  left: -30px;
  /* transform: rotateZ(-1.5deg); */
}
button {
  display: block;
  margin-top: 30px;
  background: rgb(20, 20, 20);
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #7057dc;
  font-weight: 500;
  letter-spacing: 0.01875rem;
  background-color: #f1eefc;
  padding: 0.5625rem 0.5rem;
  margin-right: 1rem;
}
.pointer {
  cursor: pointer;
}
.space {
  margin: 32px;
}
</style>
