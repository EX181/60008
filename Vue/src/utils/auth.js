import { reactive } from 'vue'

export const auth = reactive({
    isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true',

    loginstate() {
        sessionStorage.setItem('isLoggedIn', 'true')
        this.isLoggedIn = true
    },

    logoutstate() {
        sessionStorage.removeItem('isLoggedIn')
        this.isLoggedIn = false
    }
})