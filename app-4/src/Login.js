import React from 'react';

class Login extends React.Component{
  constructor(){
    super()
    this.state = {
      userName: '',
      passWord: ''
    }

    this.loginDisplay = this.loginDisplay.bind(this)
  }

  handleUser(event){
    this.setState({userName: event})
  }

  handlePass(event){
    this.setState({passWord: event})
  }

  loginDisplay(){
    alert(`Username: ${this.state.userName} Password: ${this.state.passWord}`)
  }

  render(){
    return (
      <div>
        <input onChange={event => this.handleUser(event.target.value)}/>
        <input onChange={event => this.handlePass(event.target.value)}/>
        <button onClick={() => this.loginDisplay()}>Login</button>
      </div>
    )
  }
}

export default Login