import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import UserPage from "../pages/UserPage.vue";
import About from "../pages/About.vue";
import PostIdPages from "../pages/PostIdPages.vue";
import PostPageWithStore from "../pages/PostPageWithStore.vue";
import PostPageCompositionAPI from "../pages/PostPageCompositionAPI.vue";
const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: UserPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: PostIdPages,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
  {
    path: "/composition",
    component: PostPageCompositionAPI,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
