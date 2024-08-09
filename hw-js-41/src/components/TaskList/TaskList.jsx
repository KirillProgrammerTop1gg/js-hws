import React, { Component } from "react";
import './TaskList.css'

class TaskList extends Component{
    tasks = [
        { id: 22156461, text: 'Завершити проект на хакатоні' },
        { id: 82490991, text: 'Підготуватися до контрольної роботи з математики' },
        { id: 73677201, text: 'Прочитати розділ книги з історії' },
        { id: 31370224, text: 'Переглянути урок з програмування' },
        { id: 87694060, text: 'Погуляти з друзями' }
    ]
    constructor() {
        super();
        this.deleteTask = this.deleteTask.bind(this);
    }
    deleteTask = (id) => (this.tasks = this.tasks.filter(task => task.id !== id), this.forceUpdate());
    addTask = (evt) => (evt.preventDefault(), this.tasks.push({
        id: Math.floor(10000000 + Math.random() * 90000000),
        text: document.querySelector('.taskList__input').value
    }), this.forceUpdate());
    render() {
        return <>
            <h1 className="taskList__title">Task List</h1>
            <ul className="taskList__list">
                {this.tasks.map(task =>
                    <li key={task.id} className="taskList__item">
                        <p className="taskList__text">{task.text}</p>
                        <button data-id={task.id} onClick={() => this.deleteTask(task.id)} className="taskList__del">Delete</button>
                    </li>
                )}
            </ul>
            <form className="taskList__form">
                <input type="input" className="taskList__input" placeholder="Task text"/>
                <button type="submit" onClick={(e) => this.addTask(e)} className="taskList__add">Add new task</button>
            </form>
        </>
    }
}

export default TaskList;