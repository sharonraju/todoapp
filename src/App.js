import React from 'react';
//import ReactDOM from "react-dom";
import './App.css';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import todoData from './components/todoData';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoData

    };
    this.convertTodos = this.convertTodos.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(id) {
    this.setState((prevState) => {
      const newtodo = prevState.todos.map((item) => {
        
        if(item.id===id)
        {
         
          item.completed = item.completed ? false : true;
          
        }
        return item
      })
      return {
        todos: newtodo
      }
    })
  }

  convertTodos = todo => {
    return (
      <div>
        <TodoItem item={todo} key={todo.id} 
        handlefunc = {this.handleChecked}/>
        <br />
      </div>
    );

  }


  render() {
    let todos = this.state.todos.map(this.convertTodos)
    return (
      <div className="todo-view">
        {todos}

      </div>
    )
  }
}

{/*
function  App() {
  const todoItem = todoData.map(item => <TodoItem key={item.id} item = {item}/> )
  return(
    <div className="todo-view">
      {todoItem}
    </div>
  )
  
}
*/}
export default App;
