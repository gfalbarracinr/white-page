import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    background-color: #f7f4d5;
    border-bottom: 0.5px solid #575757;
`
const WrapperLink = styled.div`
    justify-content: space-around;
    min-width: 200px;
    display: flex;
`
const AboutTag = styled.h3`
    margin-left: auto;
    padding-right: 2%;
`
const Header = () => {
    return (
        <Wrapper>
            <WrapperLink>
                <h3><Link to="/">Wall</Link></h3>
                <h3><Link to="/info">Info</Link></h3>
            </WrapperLink>
            <AboutTag><Link to="/about">About</Link></AboutTag>
        </Wrapper>
    );
};

export default Header;