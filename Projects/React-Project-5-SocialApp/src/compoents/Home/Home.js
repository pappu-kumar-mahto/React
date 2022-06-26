import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
} from "react-bootstrap";
import "./Home.css";
import RandomPostInfo from "../../assests/randomPostInfo.json";
import RandomPostUpdateTime from "../../assests/randomPostUploadTime.json";
import Posts from './Posts'
import ActiveMemberList from './ActiveMemberList'

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

  return (
    <Container className="post-container">
      <Row>
        <ActiveMemberList posts={posts} />
        <Posts posts={posts} setPost={setPost} />
      </Row>
    </Container>
  );
};
export default SocialApp;
