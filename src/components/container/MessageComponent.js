import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";
import * as actions from '../../actions';
import Message from '../container/Message';
import DisplayInput from '../container/DisplayInput';
import "../styles/mapStyles.css"
import styled, { injectGlobal } from 'styled-components';
import WritingTool from '../../context';
import ExtGeolocation from '@hypersprite/react-geolocation-hoc';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Markazi+Text');

`



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
            city: "Anonymous"
        };
    }
  
    componentDidMount() {
        this.props.fetchMessages();
    }
    handleClick = (click) =>{
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${this.props.lat}+${this.props.lng}&key=05f3cbf13e3d4984b54a7332c148741c
        `)
        .then(response => response.json())
        .then(data => {
            if (data.results[0].components.city === undefined){
                this.setState({city:'Anonymous'})    
            }else{
                this.setState({city:`${data.results[0].components.city}, ${data.results[0].components.country}`})
            }
        })
        if(!this.state.drawing){
            this.setState({
                newMessage : {
                    clientX: click.clientX + document.getElementById("style-15").scrollLeft - 20,
                    clientY: click.clientY + document.getElementById("style-15").scrollTop - 80,
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
    handleScroll = (event) =>{
        console.log(event)
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
                <WritingTool.Consumer>
                    { ({writing}) => (this.state.drawing && !this.state.visible && writing ? <DisplayInput newMessage={newMessage} toggleDrawing={this.toggleDrawing} /> : "")}
                </WritingTool.Consumer>
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

export default ExtGeolocation(connect(mapStateToProps, actions)(MessageComponent));