import React from 'react';
import WritingTool from '../../context';
import {IoAndroidHand, IoAndroidCreate} from 'react-icons/lib/io';
import ReactToolTip from 'react-tooltip';
import styled from 'styled-components';

const LectureButton = styled.button`
 background-color: ${props => !props.writing ? "#c0bcb7" : "white" };
 overflow: hidden;
 outline:none;
 border: none;
 background-repeat:no-repeat;
 margin-top: 20px;
 cursor: pointer;   
`
const WritingButton = styled(LectureButton)`
 background-color: ${props => props.writing ? "#c0bcb7" : "white" };
`

const EnableButton = () => {
    return (
        <div>
            <WritingTool.Consumer>
            {({ toggleWriting, writing }) =>(
                <div>
                    <LectureButton writing={writing} data-tip="Lecture mode" onClick={() => toggleWriting(false)}><IoAndroidHand/></LectureButton>
                    <WritingButton writing={writing} data-tip="Writing mode" onClick={() => toggleWriting(true)}><IoAndroidCreate/></WritingButton>
                    <ReactToolTip/>
                </div>
            )}

            </WritingTool.Consumer>
        </div>
    );
};

export default EnableButton;