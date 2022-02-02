import axios from "axios";
import { ref, onMounted } from "vue";

export function usePosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostsLoading = ref(true);
  const feching = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: 1,
            _limit: limit,
          },
        }
      );
      totalPages.value = Math.ceil(response.headers["x-total-count"] / limit);
      posts.value = response.data;
    } catch (error) {
      alert("ошибка");
    } finally {
      isPostsLoading.value = false;
    }
  };

  onMounted(feching);

  return { posts, isPostsLoading, totalPages };
}
