import { Component } from "react";
import { ToDoItem } from "./ToDoItem/ToDoItem";
import { ToDoList } from "./ToDoList/ToDoList";
import { AddToDoItem } from "./AddToDoItem/AddToDoItem";
import "./styles.css";

export class ToDo extends Component {
  state = {
    items: [],
    inputValue: "",
  };

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };
 
  onAddToItem = () => {
    this.setState({
      items: [this.state.inputValue, ...this.state.items],
      inputValue: "",
    });
  };

  onRemoveItem = (itemIndex) => {
    this.setState({
      items: this.state.items.filter((_, index) => index !== itemIndex),
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="to-do">
        <h3 className="to-do__title">REACT TO DO</h3>
        <ToDoList items={this.state.items} onItemClick={this.onRemoveItem}/>
        <AddToDoItem
          value={this.state.inputValue}
          onChange={this.onInputChange}
          onClick={this.onAddToItem}
        />
      </div>
    );
  }
}
