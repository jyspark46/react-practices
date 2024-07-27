import React from 'react';
import * as styles from './assets/scss/Task.scss';

function Task({no, name, done}) {
    return (
        <li className={styles._Task}>
            <input
                type='checkbox'
                checked={done === 'Y'}
                onChange={e => {}}/>
            {name}    
            <a href='#' className={styles.Task_Remove} />
        </li>
    );
};

export default Task;