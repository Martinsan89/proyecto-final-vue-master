import Vue from "vue";
import App from "./App.vue";
import router from "./routers/router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import userMixin from "./mixins/user.mixin";
import VueToastr2 from "vue-toastr-2";
import "vue-toastr-2/dist/vue-toastr-2.min.css";

window.toastr = require("toastr");
Vue.use(VueToastr2);

Vue.config.productionTip = false;

Vue.mixin(userMixin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
