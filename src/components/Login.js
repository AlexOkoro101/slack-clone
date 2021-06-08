import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase';

function Login() {
    const signin = (e) => {
        e.preventDefault();

        auth.signInWithPopup(provider)
        .catch((err) => alert(err.message))
    }

    return (
        <Container>
            <InnerContainer>
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"></img>
                <h1>Sign in to the Alex Slack</h1>
                <p>alex.slack.com</p>

                <Button onClick={signin}>Sign in with Google</Button>
            </InnerContainer>
        </Container>
    )
}

export default Login

const Container = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;
const InnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > Button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d4b !important;
        color: white;
    }
`;
