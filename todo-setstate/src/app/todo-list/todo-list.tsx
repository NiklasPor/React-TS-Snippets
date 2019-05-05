import React from 'react';
import { ToDo } from '../../model/todo';
import ToDoComponent from '../todo/todo';
import ToDoCreation from '../todo-creation/todo-creation';

type state = {todos: ToDo[]};
export default class ToDoList extends React.Component<state, state>{
  constructor(props: state) {
    super(props);
    this.state = {todos: props.todos};
    this.onChange = this.onChange.bind(this)
    this.onAdd = this.onAdd.bind(this)
  }

  onChange(todo: ToDo): void {
    this.setState((state) => {
      const todos = state.todos;
      const index = todos.findIndex(t => t.id === todo.id);
      todos[index] = todo
      return {todos: todos}
    });
  }

  onAdd(todo: ToDo): void {
    this.setState((state) => {
      const todos = state.todos;
      todos.push(todo);
      return {todos: todos}
    });
  }

  render() {
    return <div>
      { this.state.todos.map(todo => <ToDoComponent todo={todo} onChange={this.onChange}/>)}
      <ToDoCreation onAdd={this.onAdd}></ToDoCreation>
    </div>
  }
}