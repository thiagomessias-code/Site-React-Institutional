import Router from 'next/router/';
import actions from '../../redux/actions'
import { getCookie } from './cookie';


export default function (ctx) {
    if (ctx.isServer) {
        ctx.store.dispatch(actions.reauthenticate(getCookie("token"), ctx.req))
    } else if (!ctx.store) {
        const token = ctx.getState().auth.token;
        if (!token && (
            ctx.pathName.includes("/area-cliente/pedido") ||
            ctx.pathName.includes("/area-cliente/dados") ||
                ctx.pathName.includes("/area-cliente/alterar-senha")
        ))Router.push("/area-cliente")
    }
}