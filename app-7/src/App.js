import React from 'react';
import './App.css';
import NewTask from './components/NewTask'

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <NewTask/>
      </div>
    )
  }

}

export default App;
