import initialState from './state'

export default {
    // @ts-ignore
    RESET_STORE: (state) => {
        Object.assign(state, initialState())
    },
    // @ts-ignore
    SET_AUTH_USER: (state, { authUser }) => {
        state.authUser = {
            uid: authUser.uid,
            email: authUser.email
        }
    },

    SET_OPTION: (state, option ) => {
        state.option = option
    }
}