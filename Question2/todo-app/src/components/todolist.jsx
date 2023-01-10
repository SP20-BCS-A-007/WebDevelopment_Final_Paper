import { React, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Todolist = () => {
  const [todolist, settodolist] = useState([]);
  const [error, setError] = useState("");

  const loadData = () => {
    axios
      .get("http://localhost:2000/api/courses")
      .then((res) => {
        settodolist(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(loadData, []);

  return (
    <>
      <h2 style={{color: "#FFC200", textAlign: "center"}}>{error}</h2>
      <Container>
        <Row>
          {todolist.map((todo) => (
            <Col className="col-4" key={todo._id}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{todo.title}</Card.Title>
                  <Card.Text className="mb-1">{todo.description}</Card.Text>

                </Card.Body>
               
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Todolist;
