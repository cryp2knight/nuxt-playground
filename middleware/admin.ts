export default function ({ store, redirect }: any) {
    if (!(store.state.authUser && store.state.authUser.uid === 'Ipke6LOtRWRsyIc2dJSMdeNMbd23')) {
        return redirect('/')
    }
}
