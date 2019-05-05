import React from 'react';
import ToDoList from './todo-list/todo-list';
import { ToDo } from '../model/todo';

const toDos: ToDo[] = [
  {id: '0', text: 'Learn distributed systems.', done: false},
  {id: '1', text: 'Learn computer graphics.', done: true},
  {id: '2', text: 'Learn for life.', done: false},
];

export default class App extends React.Component{
  render() {
    return <ToDoList todos={toDos}/>
  }
}