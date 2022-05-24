import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import fullCalendar from "vue-fullcalendar";

Vue.config.productionTip = false;
Vue.component("full-calendar", fullCalendar);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
