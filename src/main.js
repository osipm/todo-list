import { createApp } from "vue";
import App from "./App";
import components from "./components/btn/index";
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
