import React, { Component } from 'react';
var ReactCanvas = require('react-canvas');
class Board extends Component {
    render() {
        return (
            <ReactCanvas.Surface width={"80%"} height={"80%"} >
                <ReactCanvas.Text>
                    Este es una prueba
                </ReactCanvas.Text>
            </ReactCanvas.Surface>
        );
    }
}

export default Board;