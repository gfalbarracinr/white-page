import React from 'react';
import { convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import SanitizedHTML from 'react-sanitized-html';
import styled from 'styled-components';

const MessageStyle = styled.div`
    display: block;
    position: absolute;
    top: ${props => props.message.positionY}px;
    left: ${props => props.message.positionX}px;
`

const Message = (props) => {

    const text = {
        entityMap: {},
        blocks:   props.message.text.blocks,
    }
    return (
        <MessageStyle message={props.message}> 
            <SanitizedHTML 
                allowedTags={['h1', 'h2', 'h3', 'u', 'li',
                'ol', 'em', 'strong', 'code', 'blockquote']}
                html = {stateToHTML(convertFromRaw(text))}
            />
        </MessageStyle>
    );
};

export default Message;