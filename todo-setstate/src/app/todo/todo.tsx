import { ToDo } from "../../model/todo";
import React, { FormEvent } from "react";

type props = {todo: ToDo, onChange: (todo: ToDo) => void};
export default class ToDoComponent extends React.Component<props>{
    constructor(props: props) {
        super(props);
        this.onSwitch = this.onSwitch.bind(this);
    }

    onSwitch(event: FormEvent<HTMLButtonElement>) {
        const todo = this.props.todo;
        this.props.onChange({id: todo.id, done: !todo.done, text: todo.text})
    }

    render() {
        return (
            <div>
                { this.props.todo.text }
                <b> Done: { this.props.todo.done.toString() } </b>
                <button onClick={this.onSwitch}>Switch!</button>
            </div>)
    }
}
