import { Col, ListGroup, Badge } from "react-bootstrap";
import { TbUserCircle } from "react-icons/tb";
import randomChatList from "../../assests/randomChatMsgs.json";
import "./Home.css";
const ChatList = ({ posts }) => {
  return (
    <Col md={3}>
      <ListGroup as="ol">
        {posts.map((post) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start active-member-list"
            key={post.id}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold" style={{textAlign:'left'}}>
                <TbUserCircle />
                {post.author}
              </div>
              <div style={{fontSize:'13px', textAlign:'left', opacity:'0.75'}}>
              {randomChatList[Math.ceil(Math.random() * 7)].message}
              </div>
            </div>
            <Badge bg="info" pill>
              {randomChatList[Math.ceil(Math.random() * 7)].messageCount}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};
export default ChatList;
