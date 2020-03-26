import React from 'react';
import './App.css';
import Image from './Image'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Image pic={"https://http.cat/409"}/>
      </div>
    );
  }

}
export default App;
