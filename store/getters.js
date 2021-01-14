export default {
    isLoggedIn: (state) => {
        try {
            return state.authUser.id !== null && state.authUser.emailVerified || (state.authUser.email === 'admin@layas.com')
        } catch {
            return false
        }
    },

    currentOption: (state) => {
        return state.option
    }
}