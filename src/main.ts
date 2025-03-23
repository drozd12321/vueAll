import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MainLayout from "./layout/MainLayout.vue";
import AuthLayout from "./layout/AuthLayout.vue";

const app = createApp(App);
app.component("MainLayout", MainLayout);
app.component("AuthLayout", AuthLayout);
app.use(router);

app.mount("#app");
