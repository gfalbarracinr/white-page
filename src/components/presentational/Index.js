import React, { Component } from 'react';
import Header from '../presentational/Header';
import { withRouter } from 'react-router-dom';
import MessageComponent from '../container/MessageComponent';
import styled from 'styled-components';


const Wrapper = styled.div`

    display:grid;
    grid-template-columns: 2.5vw 96vw;
    grid-template-rows: 100vh;

`


class Index extends Component {
    render() {
        return (
            <Wrapper>
                <Header history={this.props.history}/>
                <MessageComponent/>
            </Wrapper>
        );
    }
}

export default withRouter(Index);