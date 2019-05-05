import { ToDo } from "../../model/todo";
import React, { FormEvent } from "react";

type props = {onAdd: (todo: ToDo) => void};
export default class ToDoCreation extends React.Component<props, {text: string}>{
    constructor(props: props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event: FormEvent<HTMLInputElement>) {
        this.setState({text: event.currentTarget.value});
    }

    onAdd(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.onAdd({id: Date.now().toString(), text: this.state.text, done: false});
    }

    render() {
        return (
            <span>
                <form onSubmit={this.onAdd}>
                    <input type="text" onChange={this.onChange} name="textInput"></input>
                    <input type="submit" value="Create!"></input>
                </form>
            </span>)
    }
}