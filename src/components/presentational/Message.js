import React from 'react';
import styled from 'styled-components';

const MessageStyle = styled.div`
    display: block;
    position: absolute;
    top: ${props => props.message.clientY}px;
    left: ${props => props.message.clientX}px;

`

const Message = (props) => {

    return (
        <MessageStyle message={props.message}>
            <p>{props.message.messageText}</p>
        </MessageStyle>
    );
};

export default Message;