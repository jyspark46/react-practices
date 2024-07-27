import React from 'react';
import Task from './Task';
import * as styles from './assets/scss/TaskList.scss';

function TaskList({tasks}) {
    return (
        <div>
            <ul>
                {
                    tasks?.map(task => <Task
                        key={task.no}
                        no={task.no}                                        
                        name={task.name}
                        done={task.done}
                    />)
                }
            </ul>
            <input
                type='text'
                placeholder={'태스크 추가'}
                className={styles.Input_Add_Task}/>
        </div>
    );
};

export default TaskList;