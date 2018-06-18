import React, { Component } from 'react';
import styled from 'styled-components';
import { Editor, EditorState } from 'draft-js';
import onClickOutside from "react-onclickoutside";


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
            done: false
        }
        
    }
    handleClickOutside = () => {        
        this.setState({editorState: EditorState.createEmpty()})
    };

    onEditorStateChange = (editorState) => {
        console.log("este es la info", editorState)
        this.setState({
            editorState
        })
        
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

export default onClickOutside(DisplayInput);