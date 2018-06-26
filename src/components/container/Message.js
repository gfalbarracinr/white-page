import React, { Component } from 'react';
import { convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import SanitizedHTML from 'react-sanitized-html';
import styled from 'styled-components';
import onClickOutside from "react-onclickoutside";



const MessageStyle = styled.div`
    display: block;
    position: absolute;
    top: ${props => props.message.positionY}px;
    left: ${props => props.message.positionX}px;
    
`
const MessageContent = styled.div`
    padding: 10px;
    border: ${props => props.visible ? "1px solid #b1bfb8" : "none"};
    border-radius: 10px;


`
const Location = styled.p`
    font-size: 70%;
    text-align:right;
    margin-top: 0;
    display: ${ props => props.visible ? "block" : "none"};
`
class Message extends Component{
    constructor (props){
        super(props);
        this.state = { 
            text: {
                entityMap: {},
                blocks:   this.props.message.text.blocks,
            },
            visible : false
        }
    }

    handleClickOutside = () => {   
        this.setState({ visible: false })
        this.props.hideEditor(false)
    };


    blockMessage = () =>{
        this.setState({ visible: true })
        this.props.hideEditor(true)
    }
    render(){
        return (
            <MessageStyle  message={this.props.message} onClick={this.blockMessage}> 

                <MessageContent visible={this.state.visible}>
                    <SanitizedHTML 
                        allowedTags={['h1', 'h2', 'h3', 'u', 'li',
                        'ol', 'em', 'strong', 'code', 'blockquote']}
                        html = {stateToHTML(convertFromRaw(this.state.text))}
                    />
                </MessageContent>

                <Location visible={this.state.visible}>
                    {this.props.message.city}
                </Location> 
            </MessageStyle>
            
        );
    }
}

export default onClickOutside(Message);