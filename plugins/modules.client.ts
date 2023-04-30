import { Form, Field, ErrorMessage } from "vee-validate";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("Client Plugin INITED");

  nuxtApp.vueApp.component("VForm", Form);
  nuxtApp.vueApp.component("VField", Field);
  nuxtApp.vueApp.component("VErrorMessage", ErrorMessage);
  nuxtApp.vueApp.use(ElementPlus);
});
