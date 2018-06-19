import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";
import * as actions from '../../actions';
import styled from 'styled-components';
import Message from '../presentational/Message';
import DisplayInput from '../container/DisplayInput';

const Wrapper = styled.div`
    height: 90vh;
    width: 98vw;
`

class MessageComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            drawing: false,
            newMessage: {}
        };
    }
    componentDidMount() {
        this.props.fetchMessages();
    }
    handleClick = (click) =>{
        this.setState({
            newMessage : {
                clientX: click.clientX,
                clientY: click.clientY
            },
            drawing: true
        })
    }
    render() {
        const newMessage = this.state.newMessage;
        const { data } = this.props;
        return (
            <Wrapper onClick={this.handleClick}>
                {this.state.drawing ? React.createElement(DisplayInput, {newMessage}, null ) : ""}
                {  
                    _.map(data, (value, key) => (
                        <Message key={key} message={value.message} />
                      ))
                    
                }
            </Wrapper>
        );
    }
}

const mapStateToProps = ({ data }) => {
    return {
        data
    };
};

export default connect(mapStateToProps, actions)(MessageComponent);