import React, {Component} from "react";
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

// const tasks = [
//   {
//     task: "Organize Garage",
//     id: 1 + Math.random(),
//     completed: false
//   },
//   {
//     task: "Do laundry",
//     id: 1+ Math.random(),
//     completed: false
//   }
// ]

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      newTask: "",
      completed: false
    };
  }

  updateTasks(key, value) {
    this.setState({
      [key]: value
    })
  }

  // toggleItem = (clickedItemId) => {
  //     const newTodo = this.state.tasks.map(item => {
  //       if (item.id === clickedItemId) {
  //         return {
  //           ...item,
  //           completed: !item.completed,
  //         };
  //       } else {
  //         return item;
  //       }
  //     });
  //     this.setState({
  //       tasks: newTodo,
  //     });
  // };

  addTask(){
    //Create item with unique ID
    const newTask = {
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    }

    //Copy of current list of tasks
    const tasks = [...this.state.tasks]

    //Add new item to list
    tasks.push(newTask);

    //Update state with new list and reset newTasks input
    this.setState({
      tasks,
      newTask: ""
    })
  }

  deleteItem(id) {
    //copy current list of tasks
    const tasks = [...this.state.tasks];

    //Filter out task being deleted
    const updatedTasks= tasks.filter(item => item.id !== id);
    
    this.setState({tasks: updatedTasks})
  }

  render() {
    return (
      <div className = "App">
        <div>
          Add a new task
          <br/>
          <input
          type="text"
          placeholder="Type item here..."
          value={this.state.newTask}
          onChange={ event => this.updateTasks("newTask", event.target.value)}
          />
          <button
          onClick={() => this.addTask()}
          >
          Add
          </button>
          <br/>
          <ul>
            {this.state.tasks.map(item => {
              return (
                  <div onClick={() => this.deleteItem(item.id)}>
                  {item.value}
                  <button
                  onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </button>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    )
  };
}

export default App;
