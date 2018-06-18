import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Message from '../presentational/Message';
import DisplayInput from '../presentational/DisplayInput';

const Wrapper = styled.div`
    height: 90vh;
    width: 98vw;
`

class MessageComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            drawing: false,
            newMessage: {}
        };
    }
    handleClick = (click) =>{
        console.log(click.clientX, click.clientY);
        this.setState({
            drawing: true,
            newMessage : {
                clientX: click.clientX,
                clientY: click.clientY
            }
        })
        // let newMessage = {
        //     clientX: click.clientX, 
        //     clientY: click.clientY,
        //     messageText: "",
        //     key: Math.floor(Math.random() * (1000 - 0 + 1)) + 0,
        //     new: true
        // }
        
        // this.setState(prevState => ({
        //     messages: [...prevState.messages, newMessage]
        // }));
        
    }
    render() {
        const newMessage = this.state.newMessage;
        return (
            <Wrapper onClick={this.handleClick}>
                {this.state.drawing ? React.createElement(DisplayInput, {newMessage}, null ) : "Hola"}
                {
                     
                    this.state.messages.map(currentMessage => (
                        <Message key={currentMessage.key} message={currentMessage}/>
                    ))
                }
            </Wrapper>
        );
    }
}

MessageComponent.propTypes = {

};

export default MessageComponent;