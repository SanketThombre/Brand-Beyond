import axios from "axios";

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginLoading = () => ({ 
    
        type: "LOGIN_LOADING"
});

export const loginSuccess = (payload) => ({
    type: "LOGIN_SUCCESS",payload
});

export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
});

export const logout = () => ({
    type: "LOGOUT",
});

export const login = ({ username, password }) =>(dispatch)=> { 

    dispatch(loginLoading());
    axios.post("https://miniecommerce-backend.herokuapp.com/login", { username, password })

        .then((res) => {

            dispatch(loginSuccess({ username, token: res.data.token }));
            alert("Login Successful");
         })
        .catch((res) => {
            console.log(res);
            alert(res.response.data.message);
        dispatch(loginFailure());
    }
    );
}

