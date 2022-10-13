/* eslint-disable no-unused-vars */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./constant/globalColors.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faLinkedinIn,
  faYoutube
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
