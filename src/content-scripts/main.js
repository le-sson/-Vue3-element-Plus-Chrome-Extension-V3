import { createApp } from 'vue'
import App from '@/content-scripts/App.vue';
// import store from '@/content-scripts/store'; // VueX 酌情考虑是否使用
import ElementPlus from 'element-plus'; // vue3 中需使用 ElementPlus


document.addEventListener('DOMContentLoaded', function () {
    let element_css = document.createElement('link');
	element_css.href = 'https://unpkg.com/element-plus/dist/index.css';
	element_css.rel = "stylesheet";
	document.head.append(element_css);
    
	const div = document.createElement('div');
    div.id = 'content-div';
    document.body.appendChild(div);
    createApp(App)
        // .use(store)
        .use(ElementPlus)
        .mount('#content-div'); 
});