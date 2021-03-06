import { Container, Row, Col, Card } from "react-bootstrap";
import './NewsList.css'
import {Link} from 'react-router-dom'
const NewsList = ({ newsList }) => {
  return (
    <Container>
      <Row>
        {newsList &&
          newsList.map((singleNews, index) => (
            <Col md={4} key={index} className="single-news">
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    singleNews.urlToImage
                      ? singleNews.urlToImage
                      : "https://klizos.com/quirk-up-your-404-error-page-with-wit-and-humor/"
                  }
                  alt="single-news"
                />
                <Card.Body>
                  <Card.Title>
                    {singleNews.title && singleNews.title.length > 100
                      ? `${singleNews.title.slice(0, 100)}...`
                      : singleNews.title}
                  </Card.Title>
                  <Card.Text>
                  {singleNews.description && singleNews.description.length > 180
                      ? `${singleNews.description.slice(0, 180)}...`
                      : singleNews.description}
                  </Card.Text>
                  <Link className='btn btn-dark' to={`news/${index}`}>Read More</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default NewsList;
