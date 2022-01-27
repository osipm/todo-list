<template>
     <div class="post">
         <div>
  <div>назва {{post.title}}</div>
  <div>назва {{post.body}}</div>
</div>
     <div class="post__btns"><my-button>удалити</my-button></div>
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
</style>