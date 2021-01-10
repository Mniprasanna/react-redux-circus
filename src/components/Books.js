import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";

const Books = () => {
  const [currentPageBook, setCurrentPageBook] = useState(1);
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.anapioficeandfire.com/api/books?page=${currentPageBook}&pageSize=5`
      )
      .then((response) => setBookData(response.data));
  }, [currentPageBook]);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Books</Card.Title>

              {bookData.map((h) => (
                <Card className="text-center">
                  <Card.Header className="bg-info">{h.name}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      {h.authors && (
                        <>
                          <strong>Author :</strong> {h.authors}{" "}
                        </>
                      )}
                    </Card.Text>

                    <Card.Text>
                      {" "}
                      <strong>Publisher :</strong>
                      {h.publisher}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
            <Card.Footer>
              <div className="pagination">
                {currentPageBook > 1 && (
                  <Button
                    variant="success"
                    onClick={() => {
                      setCurrentPageBook(currentPageBook - 1);
                    }}
                  >
                    Go to page {currentPageBook - 1}
                  </Button>
                )}
                <Button
                  variant="warning"
                  className="ml-auto"
                  onClick={() => {
                    setCurrentPageBook(currentPageBook + 1);
                  }}
                >
                  Go to page {currentPageBook + 1}
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Books;

