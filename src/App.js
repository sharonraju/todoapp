import React from 'react';
//import ReactDOM from "react-dom";
import './App.css';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';

function App()
{
  return(
    <div className="todo-view">
      <TodoItem />
      <br />
      <TodoItem />
      <br />
      <TodoItem />
      <br />
      <TodoItem />
      <br />
      <TodoItem />
    </div>
  )
}
export default App;
