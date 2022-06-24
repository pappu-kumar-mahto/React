import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Spinner,Badge } from "react-bootstrap";
import { FcLike } from 'react-icons/fc'
import { FaRegCommentDots } from 'react-icons/fa'
import {TbUserCircle} from 'react-icons/tb'
import "./Post.css";

const SocialApp = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const getPhotos = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list");
        setPhotos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPhotos();
  }, []);

  return (
    <Container className="post-container">
      <Row>
        {photos.length ? (
          photos.map((photo) => (
            <Col key={photo.id} md={12} className="single-photo">
              <Card>
                <Card.Header className="post-header">
                  <div>
                  <TbUserCircle />{photo.author}
                  </div>
                  <p className='lead'></p>
                </Card.Header>
                <Card.Img
                  variant="top"
                  src={photo.download_url}
                  className="photo-img"
                />
                <Card.Body>
                  <Col md={{ span: 8, offset: 5 }} className="action-btn-outer">
                    <Button variant="light">
                      <FcLike />{" "}
                      <Badge pill bg="dark">
                        351
                      </Badge>{" "}
                    </Button>
                    <Button variant="light">
                      <FaRegCommentDots />{" "}
                      <Badge pill bg="dark">
                        53
                      </Badge>
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="spinner-wrapper">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </Row>
    </Container>
  );
};
export default SocialApp;
