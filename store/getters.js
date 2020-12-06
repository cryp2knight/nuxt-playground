export default {
    isLoggedIn: (state) => {
        try {
            return state.authUser.id !== null
        } catch {
            return false
        }
    },

    currentOption: (state) => {
        return state.option
    }
}