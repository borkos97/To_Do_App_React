import React, {Component} from "react";

import './AddTask.css'

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10)
    state = {
        text: '',
        checkbox: false,
        date: this.minDate
    }

    handleChange = (e) => {
        const input = e.target.type
        if(e.target.type === 'checkbox') {
            this.setState({
                [input]: e.target.checked
            })
        } else {
            this.setState({
                [input]: e.target.value
            })
        }
    }
    handleClick = () => {
        const {text, checkbox, date} = this.state
        if(text !== ''){
            const add = this.props.add(text, date, checkbox)
            if(!add) {
                this.setState({
                    text:'',
                    checkbox: false,
                    date: this.minDate
                })
            }
        } else {
            alert("Nie można przesłać formularza z pustym polem")
        }
    }
    render() {
        let maxDate = this.minDate.slice(0,4) * 1 + 1;
        maxDate = maxDate+"-12-31"
        return(
            <div className={'form'}>
                <input type="text" placeholder={'Add task...'} value={this.state.text} onChange={this.handleChange}/>
                <input type="checkbox" checked={this.state.checkbox} id={'important'} onChange={this.handleChange}/>
                <label htmlFor="important">Priorytet</label>
                <br/>
                <label htmlFor="date">Do kiedy zrobić</label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleChange}/>
                <br/>
                <button onClick={this.handleClick}>Dodaj</button>
                <hr/>
            </div>
        );
    }
}

export default AddTask;