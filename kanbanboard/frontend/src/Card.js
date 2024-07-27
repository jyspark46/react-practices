import React, {useState} from 'react';
import * as styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({no, title, description}) {
    const [showDetails, setShowDetails] = useState(false);
    const [tasks, setTasks] = useState([]);

    return (
        <div className={styles._Card}>
            <div
                className={
                    showDetails ?
                        [styles.Card_Title, styles.Card_Title_Open].join(' ') :
                        styles.Card_Title
                }
                onClick={async (e) => {
                    if(!showDetails) {
                        try {
                            const response = await fetch(`/api/task?cardNo=${no}`, {
                                method: 'get',
                                headers: {
                                    'Accept': 'application/json'
                                }
                            });
                
                            if(!response.ok) {
                                throw new Error(`${response.status} ${response.statusText}`)
                            }
                
                            const json = await response.json();
                
                            if(json.result !== 'success') {
                                throw new Error(`${json.result} ${json.message}`)
                            }
                
                            setTasks(json.data);
                        } catch(err) {
                            console.error(err);
                        }
                    }

                    setShowDetails(!showDetails);
                }}>
                {title}
            </div>
            {showDetails ? 
                <div className={styles._Card}>
                    {description}
                    <TaskList tasks={tasks}/>
                </div> :
                null
            }   
        </div>
    );
};

export default Card;