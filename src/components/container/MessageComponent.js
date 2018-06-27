import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";
import * as actions from '../../actions';
import Message from '../container/Message';
import DisplayInput from '../container/DisplayInput';
import "../styles/mapStyles.css"
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Markazi+Text');

`
const publicIp = require('public-ip');


const WrappTitle = styled.div`
    text-align: center;
    font-family: 'Markazi Text', serif;
`

const Hr = styled.hr`
    margin-top: -15px;
    margin-left: 10%;
    margin-right: 10%;
`

const WrappWall = styled.div`
    text-align: center;
`


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
        fetch(`https://geoipify.whoisxmlapi.com/api/v1?apiKey=at_flrM3dKLUB0wxaabFtWlxUgOUStrI&ipAddress=${ip}`)
      .then(response => response.json())
      .then(data => { 
          this.setState({city:`${data.location.city}, ${data.location.country}`})
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
            <WrappWall>
                <WrappTitle><h1>THE WHITE PAGE</h1> <Hr/></WrappTitle>
            <div className="scrollbar" id="style-15" onClick={this.handleClick}>
                {this.state.drawing && !this.state.visible ? <DisplayInput newMessage={newMessage} toggleDrawing={this.toggleDrawing} /> : ""}
                {  
                    _.map(data, (value, key) => (
                        <Message key={key} message={value.message} hideEditor={this.hideEditor}/>
                      ))
                    
                }
                <div className="force-overflow"/>
            </div>
            </WrappWall>
        );
    }
}

const mapStateToProps = ({ data }) => {
    return {
        data
    };
};

export default connect(mapStateToProps, actions)(MessageComponent);