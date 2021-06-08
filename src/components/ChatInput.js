import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebase';
import firebase from 'firebase';

function ChatInput({channelName, channelId, chatRef}) {
    const [input, setinput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();

        if(!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Alex Okoro',
            userImage: 'https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/156053180_2845369815676029_2795570091419791636_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFES8Tlw-ffiZx5PRR6mEXBKQLERPtM-lApAsRE-0z6UI8V2VfQ1INRPYkwbKDhHzYEd0_VNera4m-raFlV-2_3&_nc_ohc=b2R4Pg_50uUAX-CkxRs&_nc_ht=scontent.fabb1-1.fna&oh=a38d707ed88f8bdac464991c568519a8&oe=60E57F8D'
        })

        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });
        
        setinput('')

    }

    return (
        <Container>
            <form>
                <input value={input} onChange={(e) => setinput(e.target.value)} type="text" placeholder={`Message #${channelName}`} />
                <Button hidden type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;
