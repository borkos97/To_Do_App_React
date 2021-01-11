import React, { useState } from "react";

import './AddTask.css'

const AddTask = (props) => {
    const minDate = new Date().toISOString().slice(0,10)
    const [text, setText] = useState('') ;
    const [checkbox, setCheckbox] = useState(false) ;
    const [date, setDate] = useState(minDate) ;

    const handleTaskNameChange = (e) => setText(e.target.value)
    const handleCheckboxChange = (e) => setCheckbox(e.target.value)
    const handleDateChange = (e) => setDate(e.target.value)

    const handleClick = () => {
        if(text !== ''){
            const add = props.add(text, date, checkbox)
            if(!add) {
                setText('')
                setCheckbox(false)
                setDate(minDate)
            }
        } else {
            alert("Nie można przesłać formularza z pustym polem")
        }
    }

    let maxDate = minDate.slice(0,4) * 1 + 1;
    maxDate = maxDate+"-12-31"
    return(
        <div className={'form'}>
            <input type="text" placeholder={'Add task...'} value={text} onChange={handleTaskNameChange}/>
            <input type="checkbox" checked={checkbox} id={'important'} onChange={handleCheckboxChange}/>
            <label htmlFor="important">Priorytet</label>
            <br/>
            <label htmlFor="date">Do kiedy zrobić</label>
            <input type="date" value={date} min={minDate} max={maxDate} onChange={handleDateChange}/>
            <br/>
            <button onClick={handleClick}>Dodaj</button>
            <hr/>
        </div>
    );
}

export default AddTask;