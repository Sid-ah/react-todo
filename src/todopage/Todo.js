import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     todos: [
       {
         task: 'Call JJ from NASA',
         isCompleted: false
       }
     ] 
    }
  }

  render() {
    return (
      <ul className="todos-list">
        {
          this.state.todos.map((item) => {
            return (
              <li className="todo-item" key={item.id} onClick={() => console.log('Clicked here')}>
                  <span className={item.isCompleted ? "todo-item__name disabled" : "todo-item__name"}>{item.task}</span> 
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default Todo;