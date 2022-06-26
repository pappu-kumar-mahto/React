import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Badge,
} from "react-bootstrap";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa";
import { TbUserCircle } from "react-icons/tb";
import "./Post.css";
import RandomPostInfo from "../../assests/randomPostInfo.json";
import RandomPostUpdateTime from "../../assests/randomPostUploadTime.json";

const SocialApp = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list");
        let postRes = [...res.data];
        let postWithAdditionalDetails = postRes.map((post) => {
          let likeCount = Math.ceil(Math.random() * 1000);
          let commentCount = Math.ceil(Math.random() * 100);
          let text = RandomPostInfo[Math.ceil(Math.random() * 8)];
          let time = RandomPostUpdateTime[Math.ceil(Math.random() * 10)];
          let isLiked = false;

          return {
            ...post,
            likeCount,
            commentCount,
            text,
            time,
            isLiked,
          };
        });
        setPost(postWithAdditionalDetails);
      } catch (err) {
        alert(err);
      }
    };
    getPost();
  }, []);

  const toggleLikeAndUnlike = (postId) => {
    let updatedPost = posts.map((post) => {
      if (post.id === postId) {
        if (post.isLiked) {
          post.likeCount = post.likeCount - 1;
          post.isLiked = false;
        } else {
          post.likeCount = post.likeCount + 1;
          post.isLiked = true;
        }
      }
      return post;
    });
    setPost(updatedPost);
  };

  const incrementCommentCount = (postId) => {
    let updatedPost = posts.map((post) => {
      if (post.id === postId) {
        post.commentCount = post.commentCount + 1;
      }
      return post
    })
    setPost(updatedPost)
  }

  return (
    <Container className="post-container">
      <Row>
        {posts.length ? (
          posts.map((post) => (
            <Col key={post.id} md={12} className="single-post">
              <Card>
                <Card.Header className="post-header">
                  <div>
                    <TbUserCircle />
                    {post.author}
                  </div>
                  <p className="post-time">{post.time}</p>
                </Card.Header>
                <Card.Img
                  variant="top"
                  src={post.download_url}
                  className="photo-img"
                />
                <Card.Body>
                  <p className="lead">{post.text}</p>
                  <div className="action-btn-outer">
                    <Button
                      variant="light"
                      onClick={() => toggleLikeAndUnlike(post.id)}
                    >
                      {post.isLiked ? <FcLike /> : <FcLikePlaceholder />}{" "}
                      <Badge pill bg="dark">
                        {post.likeCount}
                      </Badge>{" "}
                    </Button>
                    <Button
                      variant="light"
                      onClick={() => incrementCommentCount(post.id)}
                    >
                      <FaRegCommentDots />{" "}
                      <Badge pill bg="dark">
                        {post.commentCount}
                      </Badge>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="spinner-wrapper">
            <Spinner animation="border" role="status"></Spinner>
          </div>
        )}
      </Row>
    </Container>
  );
};
export default SocialApp;
