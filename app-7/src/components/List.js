import  React from 'react'
import ToDo from './ToDo'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  render() {
    const displayList = this.props.tasks.map((task, i) => {
    return <ToDo key={i} task={task}/>
    })

    return (
      <div>
        {displayList}
      </div>
    )
  }
}

export default List