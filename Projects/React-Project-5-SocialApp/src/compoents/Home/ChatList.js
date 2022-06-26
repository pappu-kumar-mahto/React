import { Col, ListGroup, Badge } from "react-bootstrap";
import { TbUserCircle } from "react-icons/tb";
import randomChatList from '../../assests/randomChatMsgs.json'
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
                  <div className="fw-bold">
                    <TbUserCircle />
                    {post.author}
                        </div>
                        {randomChatList[Math.ceil(Math.random()*7)]}
                </div>
                <Badge bg="primary" pill>
                  {Math.ceil(Math.random()*5)}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      );
}
export default ChatList