import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);



// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
    firstDayOfWeek: 2,
});

new Vue({
    el: '#app',
    components: {
        'todo-app': App
    },
    router,
    store
});
