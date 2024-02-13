import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"

export function toast(message: string) {
    Toastify({
        text: message,
        duration: 4000,
        close: true,
        gravity: 'bottom',
        position: 'right',
        stopOnFocus: true,
        style: {
            background: '#3e8ed0',
        },
    }).showToast();
}