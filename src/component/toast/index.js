import Vue from 'vue';
import Toast from './toast.vue';

let time_handle = 0;
let VCToast = Vue.extend(Toast);
let vc_toast = new VCToast().$mount();
document.body.appendChild(vc_toast.$el);

function show(content, type) {
    vc_toast.content = content.toString();
    vc_toast.type = typeof type === 'string' ? type : '';
    vc_toast.show = true;
    clearTimeout(time_handle);
    time_handle = setTimeout(() => {
        vc_toast.show = false;
    }, 3000);
}

export default show;