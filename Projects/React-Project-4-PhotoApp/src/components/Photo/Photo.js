import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import "./Photo.css";
import {Link} from 'react-router-dom'

const PhotoApp = () => {
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
    <Container>
      <Row>
        {photos.length ? (photos.map((photo) => (
          <Col key={photo.id} md={3} className="single-photo">
            <Card>
              <Card.Header>{photo.author}</Card.Header>
              <Card.Img variant="top" src={photo.download_url} className="photo-img"/>
              <Card.Body className='btn-wrapper'>

                <a className="btn btn-dark" href={photo.url}>View Source</a>
                <Link className="btn btn-dark" to='/photo/:id'>Enlarge Photo</Link>
              </Card.Body>
            </Card>
          </Col>
        ))) :<div className="spinner-wrapper">
        <Spinner animation="border" role="status"></Spinner>
      </div> }  
      </Row>
    </Container>
  );
};
export default PhotoApp;
