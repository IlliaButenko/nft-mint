import React from 'react';
import HeaderCount from '../components/headerCont';
import Slider from '../components/slider';
import Background from './background';
export default function MainFlex() {
    return (
        <>
        <Background/>
        <div className='main-flex'>
            <Slider/>
            <HeaderCount/>
        </div>
        </>
        
    );
}