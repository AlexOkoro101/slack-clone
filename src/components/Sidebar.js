import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function Sidebar() {
    const [channels] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth);

    return (
        <Container>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>ALEX SLACK</h2>
                    <h3>
                        <FiberManualRecordIcon></FiberManualRecordIcon>
                        {user.displayName}
                    </h3>
                </SidebarInfo>
                <CreateIcon></CreateIcon>
            </SidebarHeader>

            <SidebarOption Icon={InsertComment} title="Threads"></SidebarOption>
            <SidebarOption Icon={Inbox} title="Mentions & reactions"></SidebarOption>
            <SidebarOption Icon={Drafts} title="Saved items"></SidebarOption>
            <SidebarOption Icon={BookmarkBorder} title="Channel browser"></SidebarOption>
            <SidebarOption Icon={PeopleAlt} title="People & user groups"></SidebarOption>
            <SidebarOption Icon={Apps} title="Apps"></SidebarOption>
            <SidebarOption Icon={FileCopy} title="File browser"></SidebarOption>
            <SidebarOption Icon={ExpandLess} title="Show less"></SidebarOption>

            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels"></SidebarOption>
            <hr />
            <SidebarOption Icon={Add} addChannelOption title="Add Channel"></SidebarOption>
            {channels?.docs.map(doc => (
                <SidebarOption key={doc.id} id={doc.id} title={doc.data().name}></SidebarOption>
            ))}

            
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;
const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;
