import { createApp } from "vue";
import App from "./App.vue";
import "./tailwind.css";
import cookie from "../dist/vue-cookie.common.js";
import Highlight from "@point-hub/vue-highlight";
import "highlight.js/styles/atom-one-dark.css";

// Import Languages
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";

// Register Language
Highlight.registerLanguage("html", html);
Highlight.registerLanguage("javascript", javascript);

const app = createApp(App);

app.use(cookie, {});
app.use(Highlight.plugin);
app.mount("#app");
