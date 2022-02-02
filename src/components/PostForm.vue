<template>
<h2>создать пост</h2>
    <form form @submit.prevent>
  <my-input
  v-focus
  class="minput"
  v-model="post.title" 
   type="text"
    placeholder="name"/>
  
  <my-input
class="minput"
 v-model="post.body"   
  type="text" 
  placeholder="description"/>

  <my-button
  style="align-self: flex-end; margin-top: 15px"
   @click="createPost">створити</my-button>
</form>
</template>

<script>


export default {

    data(){
    return{
            post:{
                title: "",
                body: ""
            }
        }
    },
    methods: {
        createPost(){
        this.post.id = Date.now();
        this.$emit("create", this.post )
        this.post = {title:'',
        body: ''}
        }
    }
}
</script>
<style>
form {
  display: flex;
  flex-direction: column;
}
.minput{
    margin-top: 15px;
}
</style>  