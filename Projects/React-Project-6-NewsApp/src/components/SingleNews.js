import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import './NewsList/NewsList.css'
const SingleNews = ({ newsList }) => {
    const { id } = useParams()
    let singleNews = newsList && id && newsList[id]
  return (
    <Container>
      <Row>
        {singleNews && (
                  <Col md={{span:'4', offset:'4'}} className="single-news">
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
                  <Button variant="dark">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          )}
      </Row>
    </Container>
  );
};
export default SingleNews;