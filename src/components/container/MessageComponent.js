import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageComponent extends Component {
    render() {
        return (
            <div>
                <h1>Este es el panel donde se mostrarán los mensajes</h1>
            </div>
        );
    }
}

MessageComponent.propTypes = {

};

export default MessageComponent;