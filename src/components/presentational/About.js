import React from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { IoSocialTwitter } from 'react-icons/lib/io';

const Wrapper = styled.div`

    display:grid;
    grid-template-columns: 2.5vw 96vw;
    grid-template-rows: 100%;
    font-family: 'Markazi Text', serif;
    text-align: left;
    min-height: 100vh;

`
const Img = styled.img`
    border-radius: 50%;
    width: 100%;
    max-height: auto;
    max-height: 400px;
    max-width: 400px;
    margin-bottom: 5%;
`
const Content = styled.div`
    & > h1{
        text-align: center;
    }
    margin-right: 10%;
    margin-left: 10%;
    & > a{
        margin-left: 10%;
    }
`

const Myself = styled.div`
    display: flex;
    & > h2 {
        text-align:right;
    }
    @media (max-width: 900px) {
    flex-flow:column;
  }
`
const Text = styled.div`
    margin-top: 5%;    
    margin-left: 15%;
    margin-right: 15%;
    & > h2 > a:hover {
        color:#c0bcb7;
    }
`

const A = styled.a`
    position: relative;
    height: 20px;
    box-sizing: border-box;
    padding: 1px 8px 1px 6px;
    background-color: #1b95e0;
    color: #fff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 15%;
`


const About = (history) => {
    return (
        <Wrapper>
           <Header history={history}/>
           <Content>
            
            <h1>About </h1> 
            <Myself>
                <Img alt="Giovanny Albarracín" src="https://pbs.twimg.com/profile_images/1015086152410333184/TFfYe743_400x400.jpg"/>
                <Text>
                    <h2>Hey there, I’m Giovanny Albarracín. I’m an IT student at Universidad Nacional living in Bogotá, Colombia. I am a fan of technology,     web development, and programming. I’m also interested in soccer and music. You can visit my website <a href="http://about.me/giovannyalbarracin">here</a>.</h2>
                </Text>
            </Myself>
            <A target="_blank" href="https://twitter.com/GioAlbarracin?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false"> <IoSocialTwitter/> Follow @GioAlbarracin</A>
           </Content>
        </Wrapper>
    );
};

export default withRouter(About);