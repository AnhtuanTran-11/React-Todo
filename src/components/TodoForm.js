// import React, { Component } from 'react';

// class TodoForm extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             newTask: "",
//             tasks: []
//         }
//     }
//     handleChanges = event => {
//         this.setState({
//             newTodo: event.target.value,
//         })
//     }

//     render() {
//         const { addTask, updateTasks } = this.props;
//     return (
//             <form>
//             <input
//               type="text"
//               name="tasks"
//               placeholder="Add a todo here"
//               value={this.state.newTask}
//               onChange={event => this.props.updateTasks("newTask", event.target.value)}
//             />
//             <button onClick={() => addTask()}>Add todo</button>
//             <button>Clear completed</button>
//             </form>
//     )
//     }}

//     export default TodoForm;