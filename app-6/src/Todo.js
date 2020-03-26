import React from 'react';

class ToDo extends React.Component {

  render() {
    return (
      <div>
        {this.props.task}
      </div>
    )
  }
}

export default ToDo