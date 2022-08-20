
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Login/action';
import {useNavigate} from 'react-router-dom';


export const Login = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => { 
        const payload = { email, password };
        dispatch(login(payload));
    }
    
    

    if (isAuthenticated) {
        if (email == "admin" && password == "admin") { 
            navigate('/admin');
        }
        else {
            navigate("/");
        }
          
    }

    return (
        <>
            <h1>Login</h1>
            
            <br/>
           <TextField
          required
                id="outlined-required"
                value={email}
                label="Email"
                onChange={(e)=>setEmail(e.target.value)}
       
            />
            <br />
            <br />
            
            <TextField
                type="password"

          required
          id="outlined-required"
          label="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
          
            />
            
            <br />
            <br />
            
            <Button variant="contained" onClick={() => handleSubmit()}>Login</Button>
        

        </>
    )
}