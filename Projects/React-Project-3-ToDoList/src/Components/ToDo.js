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
import { MdDeleteOutline, MdOutlineAddBox } from "react-icons/md";

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newToDo: "",
      todoList: [
        "Revise Async Await",
        "Revise React component and props",
        "Practice questions on array methods",
        "Practice more JS projects",
      ],
      isEditing: false,
      editingIndex: ''
    };
  }
//Add or Update ToDo
  addOrUpdateTodo() {
    const {newToDo, isEditing, editingIndex } = this.state
    
    if (newToDo) {
      if (isEditing) {
        this.setState((prevState) => ({
          todoList: prevState.todoList.map((todo, index) => {
            if (index === editingIndex)
              todo = newToDo;
            return todo
          }),
          newToDo:''
        }))
      } else {
        this.setState((prevState) => ({
          todoList: [...prevState.todoList, newToDo],
          newToDo: ''
        }))
      }
    }
  }

  //Edit the ToDo of the list.
  editToDo = (inputIndex) => {
    this.setState((prevState) => ({
      newToDo: prevState.todoList[inputIndex],
      isEditing: true,
      editingIndex: inputIndex
    }))
  }

  //Delete the ToDo from the list as well from the memory.
  deleteToDo=(inputIndex) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter(
        (todo, index) => index !== inputIndex
      ),
    }));
  }
  render() {
    let { newToDo, todoList } = this.state;
    return (
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
              //only add btn works when the input box is not empty.
              onClick={() =>
                newToDo &&
                this.setState((prevState) => ({
                  todoList: [...prevState.todoList, newToDo],
                  newToDo: "", //to make the input box empty again
                }))
              }
            >
              <MdOutlineAddBox />
            </Button>
          </InputGroup>
          <ListGroup className="to-do-list">
            {todoList.map((todo, index) => (
              <ListGroup.Item className="to-do-list" key={index}>
                <Row>
                  <Col md={9}>{todo}</Col>
                  <Col md={3} className="action-btns">
                    <Button
                      variant="warning"
                      size="sm"
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
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Container>
    );
  }
}
export default ToDo;
