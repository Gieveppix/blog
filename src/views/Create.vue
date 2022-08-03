<template>
  <div class="create">
    <form @submit.prevent="addPost">
        <label>Title:</label>
        <input v-model="title" type="text" required>
        <label>Content:</label>
        <textarea v-model="body" required></textarea>
        <label>Tags (press enter to add a tag)</label>
        <input 
        v-model="tag" 
        type="text"
        @keydown.enter.prevent="handleKeydown"
        >
        <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
        </div>
        <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

        const router = useRouter()
        console.log(router)

        const handleKeydown = () => {
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/, '') //removes whitspace
                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        const addPost = async () => {
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value
            }

            await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify(post)
            })

            router.push({ name: 'Home' })
        }

        return { title, body, tag, tags, handleKeydown, addPost }
    }
}
</script>

<style>
form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}
input, textarea {
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
    font-size: 18px
}
.pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #7057dc;
    font-weight: 500;
    letter-spacing: .01875rem;
    background-color: #f1eefc;
    padding: 0.5625rem 0.5rem;
    
}
</style>