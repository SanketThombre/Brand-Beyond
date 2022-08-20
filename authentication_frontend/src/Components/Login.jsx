
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { useState} from 'react';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => { 
        
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
        //   defaultValue="username"
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
          //   defaultValue="Hello World"
            />
            
            <br />
            <br />
            
            <Button variant="contained" onClick={() => handleSubmit()}>Login</Button>
        

        </>
    )
}