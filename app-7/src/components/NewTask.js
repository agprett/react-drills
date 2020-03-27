import React, {Component} from 'react'
import List from './List'

class NewTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      newTask: ''
    }
  }
  
  handleChange(task){
    this.setState({newTask: task})
  }
  
  addNewTask(){
    this.setState({
      tasks: [...this.state.tasks, this.state.newTask],
      newTask: ''
    })
  }
  
  render() {
    return (
      <div>
        <input 
        placeholder='New Task' 
        onChange={event => this.handleChange(event.target.value)}
        value={this.state.newTask}
        />
        <button onClick={() => this.addNewTask()}>Add</button>
        <List tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default NewTask