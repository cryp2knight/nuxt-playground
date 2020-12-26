export default function ({ store, redirect }: any) {
    console.log(store.state.authUser)
    if (!(store.state.authUser && store.state.authUser.uid === 'Ipke6LOtRWRsyIc2dJSMdeNMbd23')) {
        return redirect('/')
    }
}
