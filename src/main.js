import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import "aos/dist/aos.css";
import AOS from "aos";
import i18n from './i18n'


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    i18n,

    created() {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true
        });
    }
}).$mount('#app')
