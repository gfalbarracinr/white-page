import React, { Component } from 'react';
import Header from '../presentational/Header';
import { withRouter } from 'react-router-dom';
import MessageComponent from '../container/MessageComponent';
import styled from 'styled-components';
import WritingTool from '../../context';


const Wrapper = styled.div`

    display:grid;
    grid-template-columns: 2.5vw 96vw;
    grid-template-rows: 100vh;

`


class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            writing: false,
            toggleWriting: this.toggleWriting
        }
    }
    toggleWriting = (enable) =>{
        this.setState({writing: enable})
    }
    render() {
        return (
            <Wrapper>
                <WritingTool.Provider value={this.state}>
                    <Header history={this.props.history}/>
                    <MessageComponent/>
                </WritingTool.Provider>
            </Wrapper>
        );
    }
}

export default withRouter(Index);