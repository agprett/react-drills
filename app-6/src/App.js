import React from 'react';
import './App.css';
import ToDo from './Todo'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      toDoList: [],
      newTask: ''
    }
  }

  handleChange(task){
    this.setState({newTask: task})
  }

  addNewTask(){
    this.setState({
      toDoList: [...this.state.toDoList, this.state.newTask],
      newTask: ''
    })
  }

  render() {

    const tasks = this.state.toDoList.map((task, i) => {
      return <ToDo key={i} task={task}/>
    })

    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <input 
          value={this.state.newTask}
          placeholder='Enter new task'
          onChange={event => this.handleChange(event.target.value)}
        />
        <button onClick={() => this.addNewTask()}>Add</button>
        {tasks}
      </div>
    );
  }

}

export default App;
