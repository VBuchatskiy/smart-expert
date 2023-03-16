import App from "./App.vue";
import { createApp } from "vue";
import { router } from "@/router";
import { pinia } from "@/plugins";
import "./style/style.scss";

createApp(App).use(pinia).use(router).mount("#app");
