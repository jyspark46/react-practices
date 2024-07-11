import React from 'react';
import Clock from './Clock';
import ClockRefactoring from './ClockRefactoring';

function Contents(props) {
    return (
        <>
            <p>특징3: JSX 표현식 표기법</p>
            <Clock />
            <ClockRefactoring />
        </>
    );
}

export default Contents;