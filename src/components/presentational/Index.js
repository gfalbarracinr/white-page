import React, { Component } from 'react';
import Header from '../presentational/Header';
import { withRouter } from 'react-router-dom';
import MessageComponent from '../container/MessageComponent';
import styled from 'styled-components';


const Wrapp = styled.div`
    display: grid;

`


class Index extends Component {
    render() {
        return (
            <Wrapp>
                <Header history={this.props.history}/>
                <MessageComponent/>
            </Wrapp>
        );
    }
}

export default withRouter(Index);