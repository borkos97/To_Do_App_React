import React from 'react'
import Task from './Task'

import './TaskList.css'

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    if (done.length >= 2) {
        done.sort((e1, e2) => {
            if (e1.finishDate > e2.finishDate) {
                return -1
            }
            if (e1.finishDate < e2.finishDate) {
                return 1
            }
            return 0
        })
    }

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} finish={props.finish}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} finish={props.finish}/>)
    return (
        <>
            <div className={"active"}>
                <h1>Zadania do zrobienia</h1>
                {activeTasks.length >= 2 && <button onClick={() => props.sort(active, 'text')}>Sotruj alfabetycznie</button>}
                {activeTasks.length >= 2 && <button onClick={() => props.sort(active, 'date')}>Sotruj po dacie</button>}
                {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do wykonania</p>}
            </div>
            <hr/>
            <div className={"done"}>
                <h3>Zadania do zrobienia <em>({done.length})</em></h3>
                {done.length > 5 && <span style={{fontSize: 10, color: 'red'}}>
                    Wyświetlonych jest jedynie 5 ostatnich zadań</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </>
    );
}

export default TaskList;