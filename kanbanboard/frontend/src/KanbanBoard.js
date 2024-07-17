import React from 'react';
import boards from './assets/json/data.js';

function KanbanBoard() {
    return (
        <div className={''}> 
            <CardList cards={data.filter(e => e.status ==='ToDo')} Title={'ToDo'} />
            <CardList cards={data.filter(e => e.status ==='Doing')} Title={'Doing'} />
            <CardList cards={data.filter(e => e.status ==='Done')} Title={'Done'} />
        </div>
    );
}

export default KanbanBoard;