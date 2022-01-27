<template>
<div class="app">
<post-form @create="createPost"/>
<post-list :posts="posts"/>
</div>


 
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

export default {
  components: {
    PostForm, PostList  },
  data() {
    return { 
      posts:
    [
      {id: 1, title: "javascript", body: "опис поста"},
      {id: 2, title: "javascript", body: "опис поста 2"},
      {id: 2, title: "javascript", body: "опис поста 3"},
    ]}
  },
  
  methods: {
    createPost(post){
       this.posts.push(post);

        }

    }
  
    
  }
  

</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app{
  padding: 15px;
}
</style>