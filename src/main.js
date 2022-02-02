import { createApp } from "vue";
import App from "@/App";
import components from "@/components/btn/index";
import router from "@/components/router/router";
import VIntersection from "@/directives/VIntersection.js";
import directives from "@/directives";
import store from "@/store";
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).use(store).mount("#app");
