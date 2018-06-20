import React, { Component } from 'react';
import Header from '../presentational/Header';
import { withRouter } from 'react-router-dom';
import MessageComponent from '../container/MessageComponent';

class Index extends Component {
    render() {
        return (
            <div>
                <Header history={this.props.history}/>
                <MessageComponent/>
            </div>
        );
    }
}

export default withRouter(Index);