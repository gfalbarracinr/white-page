import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import onClickOutside from "react-onclickoutside";
import * as actions from '../../actions';


const Wrapper = styled.div`
    display: block;
    position: absolute;
    padding: 2px;
    min-width: 50px;
    min-height:50px;
    top: ${props => props.message.clientY}px;
    left: ${props => props.message.clientX}px;
    border: 1px solid black;
`

class DisplayInput extends Component {

    constructor (props){
        super(props);
        this.state ={
            editorState: EditorState.createEmpty(),
        }
        
    }
    makeNewMessage = () =>{
        const currentText = this.state.editorState;
        const text = convertToRaw(currentText.getCurrentContent())
        if (text.blocks[0].text === ""){
            return null
        }
        return {
            text,
            positionX: this.props.newMessage.clientX,
            positionY: this.props.newMessage.clientY
        }
    }
    
    handleClickOutside = () => {     
        const newMessage = this.makeNewMessage();
        const { addMessage } = this.props;
        if (newMessage !== null){
            addMessage({ message: newMessage });
        }
        this.setState({editorState: EditorState.createEmpty()})
    };

    onEditorStateChange = (editorState) => {
        this.setState({ editorState })
    }

    render(){
        return (
            <Wrapper message={this.props.newMessage}>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onEditorStateChange}
                />
            </Wrapper>
        );
    }
};

export default connect(null, actions)(onClickOutside(DisplayInput));