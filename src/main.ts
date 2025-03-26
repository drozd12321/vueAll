import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MainLayout from "./layout/MainLayout.vue";
import AuthLayout from "./layout/AuthLayout.vue";
import store from "./store/store"; // Импорт хранилища

const app = createApp(App);
app.component("MainLayout", MainLayout);
app.component("AuthLayout", AuthLayout);
app.use(router);
app.use(store); // Подключение хранилища
app.mount("#app");
