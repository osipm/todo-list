<template>
     <div class="post">
         <div>
    <div>{{post.id}}</div>
  <div><strong>Назва</strong> {{post.title}}</div>
  <div><strong>Назва</strong> {{post.body}}</div>
</div>
     <div class="post__btns">
        
         <my-button 
         @click="$router.push(`/posts/${post.id}`)">
         Відкрити</my-button>
         
         <my-button 
         @click="$emit('remove', post)">
         удалити</my-button></div>
  </div>
</template>

<script>


export default {
   
    props:{
        post: {
            type: Object,
            require: true,
        }
    }
}
</script>

<style >
.post{
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px;
border: 2px solid teal;
margin-top: 15px;
}

.post__btns{
    display: flex;
}
</style>