import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// store
import createStore from "./store";

// components
import App from "./app.vue";

const application = new Vue({
    el: "#application",
    store: createStore(),
    render: h => h(App)
});