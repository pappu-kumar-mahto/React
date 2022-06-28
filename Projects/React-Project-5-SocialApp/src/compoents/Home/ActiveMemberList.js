import { Col, ListGroup, Badge } from "react-bootstrap";
import { TbUserCircle } from "react-icons/tb";
import "./Home.css";
const ActiveMemberList = ({ posts }) => {
  return (
    <Col md={3}>
      <ListGroup as="ol">
        {posts.map((post) => {
          let isMemberActive = Math.ceil(Math.random() * 2) % 2;
          return (
            <ListGroup.Item
              as="li"
              className={`d-flex justify-content-between align-items-start active-member-list ${
                isMemberActive ? "inActive" : ""
              }`}
              key={post.id}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <TbUserCircle />
                  {post.author}
                </div>
              </div>
              {!isMemberActive ? (
                <Badge bg="success" pill>
                  active
                </Badge>
              ) : (
                <Badge bg="secondary" pill>
                  offline
                </Badge>
              )}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Col>
  );
};
export default ActiveMemberList;
