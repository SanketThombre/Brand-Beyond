
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./action";

const initState = {
    loading: false,
    error: false,
    isAuthenticated: false,
    user: "",
    token: "",
}

export const loginreducer = (store = initState, { type, payload }) => { 

    switch (type) {
        case LOGIN_LOADING:
            return { ...store, loading: true, error: false };
        case LOGIN_SUCCESS:
            return { ...store, loading: false, error: false, isAuthenticated: true, user: payload.username, token: payload.token };
        case LOGIN_FAILURE:
            return { ...store, loading: false, error: true, isAuthenticated: false};
        case LOGOUT:
            return { ...initState};
        default:
            return store;
    }
}