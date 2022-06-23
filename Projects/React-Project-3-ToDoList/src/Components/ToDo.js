import "./ToDo.css";

import React, { Component } from "react";
import {
  Container,
  Col,
  InputGroup,
  Form,
  Button,
  ListGroup,
  Row,
} from "react-bootstrap";

import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineAddBox, MdOutlineAddTask } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5"

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newToDo: "",
      todoList: [],
      isEditing: false,
      editingIndex: '',
    };
  }
//Add or Update ToDo
  addOrUpdateTodo= () => {
    const {newToDo, isEditing, editingIndex } = this.state
    
    if (newToDo) {
      if (isEditing) {
        this.setState((prevState) => ({
          todoList: prevState.todoList.map((todo, index) => {
            if (index === editingIndex)
              todo.text = newToDo;
            return todo
          }),
          newToDo: '',
          isEditing: false,
          editingIndex:''
        }))
      } else {
        this.setState((prevState) => ({
          todoList: [...prevState.todoList, {text: newToDo, completed:false }],
          newToDo: ''
        }))
      }
    }
  }

  //Edit the ToDo of the list.
  editToDo = (inputIndex) => {
    this.setState((prevState) => ({
      newToDo: prevState.todoList[inputIndex].text,
      isEditing: true,
      editingIndex: inputIndex
    }))
  }

  //Delete the ToDo from the list as well from the memory.
  deleteToDo=(inputIndex) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter(
        (todo, index) => index !== inputIndex),
    }));
  }

  toDoComplete = (inputIndex) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((todo, index) => {
        if (index === inputIndex)
         todo.completed = true;
        return todo
      })
    }))
  }
  render() {
    const { newToDo, todoList, isEditing } = this.state;
    return (
      <>
      <div className="bg bg2 bg3">
      </div>
        <Container style={{ margin: "20px auto" }}>
          <Col md={{ span: 4, offset: 4 }}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter
              ToDo"
                size="lg"
                type="text"
                id="toDoInput"
                value={newToDo}
                onChange={(event) =>
                  this.setState({ newToDo: event.target.value })
                }
              />
              <Button
                variant="outline-dark"
                id="button-addon2"
                onClick={this.addOrUpdateTodo}
              >
                {isEditing ? <MdOutlineAddTask /> : <MdOutlineAddBox />}
              </Button>
            </InputGroup>
            <ListGroup className="to-do-list">
              {todoList.map((todo, index) => (
                <ListGroup.Item className="to-do-list" key={index}>
                  <Row>
                    <Col xs={9} className = {todo.completed && 'completed'}>{todo.text}</Col>
                    <Col xs={3} className="action-btns">
                      <Button
                        variant="warning"
                        size="sm"
                        className = {todo.completed && 'disabled'}
                        onClick={() => this.editToDo(index)}
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => this.deleteToDo(index)}
                        >
                        <MdDeleteOutline />
                      </Button>
                      <Button
                        variant="success"
                        size="sm"
                        className = {todo.completed && 'disabled'}
                        onClick={() => this.toDoComplete(index)}
                      >
                        <IoCheckmarkDoneSharp />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Container>
      </>
    );
  }
}
export default ToDo;
