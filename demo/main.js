import { createApp } from "vue";
import App from "./App.vue";
import "./tailwind.css";
import cookie from "../dist/cookie.common.js";

const app = createApp(App);

app.use(cookie, {});

app.mount("#app");