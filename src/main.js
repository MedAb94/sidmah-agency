import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false

new Vue({

    render: h => h(App),
    created() {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true
        });
    },
}).$mount('#app')
