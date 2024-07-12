import React from 'react';
import TabBox from './TabBox';
import './assets/css/TabBox.css';

function App() {
    const tabs = [
        {no: 1, name: '메뉴1', active: false, contents: '메뉴 1의 뷰 내용'},
        {no: 2, name: '메뉴2', active: false, contents: '메뉴 2의 뷰 내용'},
        {no: 3, name: '메뉴3', active: true, contents: '메뉴 3의 뷰 내용'},
        {no: 4, name: '메뉴4', active: false, contents: '메뉴 4의 뷰 내용'},
        {no: 5, name: '메뉴5', active: false, contents: '메뉴 5의 뷰 내용'}
    ];

    return (
        <TabBox tabs={tabs} />
    );
}

export default App;