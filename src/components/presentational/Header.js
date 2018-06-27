import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {IoGrid, IoInformatcircled, IoIosContact} from 'react-icons/lib/io';
import ReactToolTip from 'react-tooltip';

const Wrapper = styled.div`
    grid-row: 1 / -1;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
`
const AboutTag = styled.h3`
    margin-top: auto;
`
const Header = () => {
    return (
        <Wrapper>
            <h3 data-tip="Wall"><Link to="/"><IoGrid/></Link></h3>
            <h3 data-tip="Info"><Link to="/info"><IoInformatcircled/></Link></h3>
            <AboutTag data-tip="About"> <Link to="/about"><IoIosContact/></Link></AboutTag>
            <ReactToolTip/>
        </Wrapper>
    );
};

export default Header;