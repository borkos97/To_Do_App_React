import React, { Component } from 'react'

import './App.css'

import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
    counter = 0
    state = {
        tasks: [
            {
                id: 0,
                text: 'Zaprogramować toDoApp',
                date: '2021.01.06',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 1,
                text: 'Pójść z psem',
                date: '2021.01.07',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 2,
                text: 'a',
                date: '2021.03.06',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 3,
                text: 'cos',
                date: '2021.01.01',
                important: false,
                active: true,
                finishDate: null
            }
        ]
    }
    deleteTask = (id) => {
        // const tasks = [...this.state.tasks];
        // const index = tasks.findIndex(task => task.id === id)
        // tasks.splice(index, 1)
        // this.setState({
        //     tasks
        // })
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task.id !== id)
        this.setState({
            tasks
        })
    }
    finishTask = (id) => {
        let tasks = [...this.state.tasks]
        tasks = tasks.map(task => {
            if(task.id === id){
                task.active = false
                task.finishDate = new Date().getTime()
            }
            return task
        } )
        this.setState({
            tasks
        })
    }

    addTask = (text, date, important) => {
        const task = {
            id: this.state.tasks.length + 1,
            text: text,
            date: date,
            important: important,
            active: true,
            finishDate: null
        }
        this.setState(prevState => ({
            tasks:[...prevState.tasks, task]
        }))
        console.log(task)
    }
    render() {
        console.log(this.state)
        return(
            <div className={"App"}>
                <h1>ToDoApp</h1>
                <AddTask add={this.addTask}/>
                <TaskList tasks={this.state.tasks} delete={this.deleteTask} finish={this.finishTask} sort={this.sortTask}/>
            </div>
        )
    }
}

export default App