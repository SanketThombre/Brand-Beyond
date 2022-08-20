
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`

width:95%;
height:500px;
margin:auto;
border:1px solid gray;
display:grid;
grid-template-columns:repeat(4,1fr);
padding:15px;
grid-gap:15px;
border-radius:10px;
background-color:#B1D7B4;
`;

const InnerDiv = styled.div`
height:170px;
border:3px solid #E8F9FD;
border-radius:5px;
text-align: left;
padding:15px;
background-color:black;
color:white;
`;

export const Admin = () => { 

    const [data, setData] = useState([]);

    useEffect(() => { 
        axios.get('http://localhost:5000/users')
            .then(res => {
                // console.log(res.data);
                setData(res.data);
            }).catch(err => {
                console.log(err);
            }
            )
    },[])
    return (
        <>
            <h1>Admin Panel</h1>

            <div style={{width:"280px",height:"25px",border: "1px solid gray",margin: "15px auto",borderRadius:"5px",backgroundColor:"#E4D192"}}>
               <h3 style={{margin: "0",color:"#42032C"}}>List of Users Signed UP</h3>
            </div>
           


            <Container>
                {data.map((item, index) => 
                    <InnerDiv key={index}>
                        <h3>Name: {item.name}</h3>
                        <h3>Email: {item.email}</h3>
                        <h3>Username: {item.username}</h3>
                </InnerDiv>
                    
                )}
            </Container>

        </>
    )
}