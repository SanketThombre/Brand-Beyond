
import styled from 'styled-components';

const WlcDiv = styled.div`
width:80%;
height:500px;
// border:1px solid red;
margin:auto;
`;
export const Home = () => {
    return (
        <>
            <h1>Welcome to Brand & BeyondIt</h1>
            <WlcDiv>
                <img  src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9naW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" width="100%" height="100%" alt="" />
            </WlcDiv>
        </>
    )
}