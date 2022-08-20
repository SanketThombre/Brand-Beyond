
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from '@mui/material/Button';

const Nav = styled.div`
width: 100%;
height:80px;
// border: 1px solid black;
margin-top: 2px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #F7ECDE;
`;

const Menubar = styled.div`
width:80%;
height:100%;
// border:1px solid red;
display:flex;
justify-content:space-around;
align-items:center;
`;

export const Navbar = () => {

    return (
        <Nav>
        <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://brandandbeyondit.com/wp-content/uploads/elementor/thumbs/logo-pqrzcxqnpa8cs4og8ey4g1onyrh9qp6c5isckv9r0g.png"/>
            <Menubar>
                <Link to="/" style={{textDecoration:"none"}}><Button variant="outlined"><h3 style={{margin:"0",color:"black"}}>Home</h3></Button></Link>
                <Link to="/login" style={{textDecoration:"none"}}><Button variant="outlined"><h3 style={{margin:"0",color:"black"}}>Login</h3></Button></Link>
                <Link to="/signup" style={{textDecoration:"none"}}><Button variant="outlined"><h3 style={{margin:"0",color:"black"}}>Sign Up</h3></Button></Link>
                <Link to="/signup" style={{textDecoration:"none"}}><Button variant="outlined"><h3 style={{margin:"0",color:"black"}}>Logout</h3></Button></Link>
        </Menubar>
            
        </Nav>
    )
}