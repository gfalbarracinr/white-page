import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { EditorState, convertToRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import onClickOutside from "react-onclickoutside";
import * as actions from '../../actions';
import HeadlinesButton from './HeadlinesButton';
import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton
} from 'draft-js-buttons';


const Wrapper = styled.div`
    text-align:left;
    display: inline-block;
    position: absolute;
    padding: 10px;
    min-width: 350px;
    min-height: 20px;
    top: ${props => props.message.clientY}px;
    left: ${props => props.message.clientX}px;
    border: 1px solid black;
`

const WrapperToolBar = styled.div`
  z-index: 1;
  position: absolute;
  top: ${props => props.message.clientY - 70}px;
  left: ${props => props.message.clientX}px;

`


const toolbarPlugin = createToolbarPlugin({
    structure: [
        BoldButton,
        ItalicButton,
        UnderlineButton,
        CodeButton,
        Separator,
        HeadlinesButton,
        UnorderedListButton,
        OrderedListButton,
        BlockquoteButton,
        CodeBlockButton
    ]
  });
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];

class DisplayInput extends Component {

    constructor (props){
        super(props);
        this.state ={
            editorState: EditorState.createEmpty(),
        }
        
    }

    focus = () => {
        this.editor.focus();
    };

    makeNewMessage = () =>{
        const currentText = this.state.editorState;
        const text = convertToRaw(currentText.getCurrentContent())
        if (text.blocks[0].text === ""){
            return null
        }
        return {
            text,
            positionX: this.props.newMessage.clientX,
            positionY: this.props.newMessage.clientY,
            city: this.props.newMessage.city
        }
    }
    
    handleClickOutside = () => {     
        const newMessage = this.makeNewMessage();
        const { addMessage } = this.props;
        if (newMessage !== null){
            addMessage({ message: newMessage });
        }
        this.setState({editorState: EditorState.createEmpty()})
        this.props.toggleDrawing();
    };

    onEditorStateChange = (editorState) => {
        this.setState({ editorState })
    }

    
    render(){
        return (
            <div className= "editor" onClick={this.focus}>
                
                <Wrapper message={this.props.newMessage}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onEditorStateChange}
                        plugins={plugins}
                        ref={(element) => { this.editor = element; }}
                    /> 
                </Wrapper>
                <WrapperToolBar message={this.props.newMessage}>
                    <Toolbar/>
                </WrapperToolBar>
            </div>
            
        );
    }
};

export default connect(null, actions)(onClickOutside(DisplayInput));