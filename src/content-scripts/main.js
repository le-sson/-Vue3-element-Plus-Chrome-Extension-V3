import { createApp } from 'vue'
import App from '@/content-scripts/App.vue';
import store from '@/content-scripts/store'; // VueX 酌情考虑是否使用
import ElementPlus from 'element-plus'; // vue3 中需使用 ElementPlus
import { matchPattern } from '@/utils/func.js';


document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.href;
    if (matchPattern('', url)) {
        const div = document.createElement('div');
        div.id = 'content-div';
        document.body.appendChild(div);
        createApp(App)
            .use(store)
            .use(ElementPlus)
            .mount('#content-div'); 
    }
});



