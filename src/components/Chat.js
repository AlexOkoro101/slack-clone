import React from 'react'
import styled from 'styled-components';

function Chat() {
    return (
        <Container>
            <h1>Chat screen</h1>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;