<template>
<div>
  <h1>сторінка з постами</h1>
  <my-input 
  v-focus
  v-model="searchQuery"
  placeholder="поиск..."/>
  <div class="app__btns">
    <my-button @click="showDialog" >создать пост</my-button>

    <my-select 
    v-model="selectedSort"
    :options="sortOptions"
    />
  </div>
  
  <my-dialoge v-model:show="dialogVisible">
    <post-form @create="createPost"/>
    </my-dialoge>

  <post-list :posts="sortedAndSearchedPost"
  @remove="removePost"
  v-if="!isPostsLoading"
  />
  <div v-else>загрузка...</div>
  <div v-intersection="loadMorePosts" class="observer"></div>
  <!-- <div class="page__wrapper">
    <div v-for="pageNumber in totalPages" 
    :key="pageNumber" 
    class="page"
    :class="{'carrentPage': page === pageNumber}"
    @click="changPage(pageNumber)"
    >{{pageNumber}}</div></div> -->
</div>


 
</template>

<script>
import MySelect from '@/components/btn/MySelect.vue';
import MyDialoge from '@/components/btn/MyDialoge.vue';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios';
import MyInput from "@/components/btn/MyInput";

export default {
  components: {
    PostForm, PostList,
    MyDialoge, MySelect, MyInput},
  data() {
    return { 
      posts:[],
    dialogVisible: false,
    isPostsLoading: false,
    selectedSort: '',
    page: 1,
    limit: 10,
    totalPages: 0,
    searchQuery: '',
    sortOptions: [
      {value: 'title', name: "по назві"},
      {value: 'body', name: "по содержанию"}
    ]
    }
  },
  
  methods: {
    createPost(post){
       this.posts.push(post);
       this.dialogVisible = false;
        },
        removePost(post){
          this.posts = this.posts.filter(p=>p.id!==post.id)
        },

        showDialog(){
          this.dialogVisible = true;
        },

        // changPage(pageNumber){
        //   this.page = pageNumber
        //   this.fetchPosts(pageNumber)
        // },

        async fetchPosts(){
          this.isPostsLoading = true;
          try {setTimeout(async()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {
              _page: this.page,
              _limit: this.limit}});
            this.totalPages = Math.ceil(response.headers['x-total-count'] /this.limit)
            this.posts = response.data;
            this.isPostsLoading = false;
          }, 1000)
            
          } catch(error){
            alert ('ошибка')
          } finally{
            
          }
          
        },

        async loadMorePosts(){
            try {
            this.page += 1;
            // this.isPostsLoading = true;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {
              _page: this.page,
              _limit: this.limit}});
            this.totalPages = Math.ceil(response.headers['x-total-count'] /this.limit)
            this.posts = [...this.posts, ...response.data];
            // this.isPostsLoading = false;
          }
            
          catch(error){
            alert ('ошибка')
          } finally{
            
          }
          
        }

    },

    mounted() {
      this.fetchPosts()
//       const options = {
//     rootMargin: '0px',
//     threshold: 1.0
// }
// const callback = (entries, observer) => {
//    if (entries[0].isIntersecting && this.page < this.totalPages) {
//         this.loadMorePosts()
//    }
// };
// const observer = new IntersectionObserver(callback, options);
// observer.observe(this.$refs.observer);
    },

    computed: {
      sortedPosts() {
  return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort])
)
    },
    
    sortedAndSearchedPost(){
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
    
    },

    

    watch: {
      // page(){
      //   this.fetchPosts()
      // }
    }
  
    
  }
  

</script>
<style>

.app__btns{
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper{
  display: flex;
  margin-top: 15px;
}

.page{
  border: 1px solid black;
  padding: 10px;
}

.carrentPage{
  border: 2px solid teal;
}

.observer{
  height: 30px;
  background: green;
}
</style>