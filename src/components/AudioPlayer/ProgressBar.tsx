import React, {useState} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { State, actionCreators } from '../../state';

const StyledProgressBar = styled.div<{currPercentage ?: Number, currBufferedLength ?: Number}>`
    width: 100%;
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #bdbdbd;
    cursor: pointer;
    &:before {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        content: '';
        will-change: transform;
        transform: ${props => props.currBufferedLength ? `scaleX(${Number(props.currBufferedLength) * 100})` : 'scaleX(0)'};
        transform-origin: left center;
        background-color: rgba(255, 255, 255, 0.1);
    }
    &:after {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        content: '';
        will-change: transform;
        transform: ${props => props.currPercentage ? `scaleX(${Number(props.currPercentage) / 100})` : 'scaleX(0)'};
        transform-origin: left center;
        background-color: rgb(30,30,28);
    }
    &:hover {
        height: 3px;
        & > div {
            display: block;
        }
    }
`

const StyleProgressKnob = styled.div<{currPercentage ?: Number}>`
    position: absolute;
    left: ${props => props.currPercentage ? `${Number(props.currPercentage)}%` : '0'};
    background-color: rgb(30,30,28);
    height: 16px;
    width: 16px;
    border: 1.5px solid white;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    display: none;
`

const ProgressBar = () => {
    const state = useSelector((state: State) => state.audioPlayer)
    const dispatch = useDispatch()
    const { setSongSeekTime } = bindActionCreators(actionCreators, dispatch)

    const currPercentage = (state.currentTime / state.duration) * 100;

    function calcClickedTime(e: React.MouseEvent<HTMLElement>) {
        const clickPositionInPage = e.pageX;
        const bar = e.currentTarget;
        const barStart = bar.getBoundingClientRect().left + window.scrollX;
        const barWidth = bar.offsetWidth;
        const clickPositionInBar = clickPositionInPage - barStart;
        const timePerPixel = state.duration / barWidth;
        return timePerPixel * clickPositionInBar;
    }

    const handleTimeDrag = (event: React.MouseEvent<HTMLDivElement>) => {
        setSongSeekTime(calcClickedTime(event))

        const updateTimeOnMove = () => (evt: React.MouseEvent<HTMLElement>) => {
            evt.preventDefault()
        };

        document.addEventListener("mousemove", updateTimeOnMove);

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", updateTimeOnMove);
        });

        event.preventDefault();
    }

    return (
        <StyledProgressBar currPercentage={currPercentage} currBufferedLength={state.bufferedLength}>
            <StyleProgressKnob currPercentage={currPercentage}/>
        </StyledProgressBar>
    )
}

export default ProgressBar;