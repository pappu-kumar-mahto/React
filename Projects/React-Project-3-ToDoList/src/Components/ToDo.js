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
import {AiOutlineCheckCircle }from "react-icons/ai"

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newToDo: "",
      todoList: [],
      isEditing: false,
      editingIndex: ''
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
              todo = newToDo;
            return todo
          }),
          newToDo: '',
          isEditing: false
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
        (todo, index) => index !== inputIndex),
    }));
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
                {isEditing ? <AiOutlineCheckCircle /> : <MdOutlineAddBox />}
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
      </>
    );
  }
}
export default ToDo;
