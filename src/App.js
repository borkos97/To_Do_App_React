import React, { Component } from 'react'

import './App.css'

import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

class App extends Component {
    state = {
        tasks: [
            {
                id: 0,
                text: 'Przykładowe zadanie',
                date: '2021.01.06',
                important: true,
                active: true,
                finishDate: null
            }
        ]
    }
    deleteTask = (id) => {
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