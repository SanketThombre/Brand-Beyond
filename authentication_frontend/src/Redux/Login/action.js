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

export const login = ({ email, password }) =>(dispatch)=> { 

    dispatch(loginLoading());

    if (email === "admin" && password === "admin") {
        dispatch(loginSuccess({ username: "Admin", token: "admin" }));
        alert("Admin Login Successful");
    }
    else {
        axios.post("http://localhost:5000/login", { email, password })

            .then((res) => {
                console.log(res);
                dispatch(loginSuccess({ email, token: res.data.token, username: res.data.user.username }));
                alert("Login Successful");
            })
            .catch((res) => {
                console.log(res);
                alert(res.response.data.message);
                dispatch(loginFailure());
            }
            );
    }
}

