import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";
import * as actions from '../../actions';
import styled from 'styled-components';
import Message from '../container/Message';
import DisplayInput from '../container/DisplayInput';

const Wrapper = styled.div`
    grid-row: 0 / -1;
    height: 90vh;
    width: 98vw;
`

const publicIp = require('public-ip');


class MessageComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            drawing: false,
            newMessage: {},
            visible: false,
            city: ""
        };
    }
    fetchLocation = (ip) =>{
        fetch(`http://ip-api.com/json/${ip}`)
      .then(response => response.json())
      .then(data => { 
          this.setState({city:`${data.city}, ${data.country}`})
       });
    }
    componentDidMount() {
        let ipResponse="" 
        publicIp.v4().then(ip => {
            ipResponse = ip
        });
        this.fetchLocation(ipResponse)
        this.props.fetchMessages();
    }
    handleClick = (click) =>{
        if(!this.state.drawing){
            this.setState({
                newMessage : {
                    clientX: click.clientX,
                    clientY: click.clientY,
                    city: this.state.city
                }
            })
            this.toggleDrawing()
        }
    }

    hideEditor  = (visible) =>{
        this.setState({visible})
        this.forceUpdate()
    }
    toggleDrawing = () =>{
        this.setState({ drawing: !this.state.drawing})
    }
    render() {
        const newMessage = this.state.newMessage;
        const { data } = this.props;
        return (
            <Wrapper onClick={this.handleClick}>
                {this.state.drawing && !this.state.visible ? <DisplayInput newMessage={newMessage} toggleDrawing={this.toggleDrawing} /> : ""}
                {  
                    _.map(data, (value, key) => (
                        <Message key={key} message={value.message} hideEditor={this.hideEditor}/>
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