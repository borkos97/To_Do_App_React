// import React, { Component } from 'react'
//
// import './App.css'
//
// import AddTask from "./components/AddTask";
// import TaskList from "./components/TaskList";
//
// class App extends Component {
//     state = {
//         tasks: [
//         ]
//     }
//     deleteTask = (id) => {
//         let tasks = [...this.state.tasks];
//         tasks = tasks.filter(task => task.id !== id)
//         this.setState({
//             tasks
//         })
//     }
//     finishTask = (id) => {
//         let tasks = [...this.state.tasks]
//         tasks = tasks.map(task => {
//             if(task.id === id){
//                 task.active = false
//                 task.finishDate = new Date().getTime()
//             }
//             return task
//         } )
//         this.setState({
//             tasks
//         })
//     }
//
//     addTask = (text, date, important) => {
//         const task = {
//             id: this.state.tasks.length + 1,
//             text: text,
//             date: date,
//             important: important,
//             active: true,
//             finishDate: null
//         }
//         this.setState(prevState => ({
//             tasks:[...prevState.tasks, task]
//         }))
//         console.log(task)
//     }
//     sortTasks = (active, type) => {
//         if (type === 'text') {
//             active.sort((e1, e2) => {
//                 e1 = e1.text.toLowerCase()
//                 e2 = e2.text.toLowerCase()
//                 if (e1 < e2) return -1
//                 if (e1 > e2) return 1
//                 return 0
//             })
//         } else if (type === 'date') {
//             active.sort((e1, e2) => {
//                 if (e1.date < e2.date) return -1
//                 if (e1.date > e2.date) return 1
//                 return 0
//             })
//         }
//
//         this.setState({
//             tasks: active
//         })
//     }
//     render() {
//         console.log(this.state)
//         return(
//             <div className={"App"}>
//                 <h1>ToDoApp</h1>
//                 <AddTask add={this.addTask}/>
//                 <TaskList tasks={this.state.tasks} delete={this.deleteTask} finish={this.finishTask} sort={this.sortTasks}/>
//             </div>
//         )
//     }
// }
//
// export default App


import React, { useState } from 'react'

import './App.css'

import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () =>  {
    const [tasks, setTasks] = useState([])


    const deleteTask = (id) => {
        let tasksList = [...tasks];
        tasksList = tasksList.filter(task => task.id !== id)
        setTasks(tasksList)
    }
    const finishTask = (id) => {
        let tasksList = [...tasks]
        tasksList = tasksList.map(task => {
            if(task.id === id){
                task.active = false
                task.finishDate = new Date().getTime()
            }
            return task
        } )
        setTasks(tasksList)
    }

    const addTask = (text, date, important) => {
        const task = {
            id: tasks.length + 1,
            text: text,
            date: date,
            important: important,
            active: true,
            finishDate: null
        }
        setTasks(prevState => [...prevState, task])
        console.log(task)
    }
    const sortTasks = (active, type) => {
        console.log('działa', active, type)
        if (type === 'text') {
            active.sort((e1, e2) => {
                e1 = e1.text.toLowerCase()
                e2 = e2.text.toLowerCase()
                if (e1 < e2) return -1
                if (e1 > e2) return 1
                return 0
            })
        } else if (type === 'date') {
            active.sort((e1, e2) => {
                if (e1.date < e2.date) return -1
                if (e1.date > e2.date) return 1
                return 0
            })
        }
        setTasks(active)
    }

    console.log(tasks)
    return(
        <div className={"App"}>
            <h1>ToDoApp</h1>
            <AddTask add={addTask}/>
            <TaskList tasks={tasks} deleteTask={deleteTask} finish={finishTask} sort={sortTasks}/>
        </div>
    )
}

export default App