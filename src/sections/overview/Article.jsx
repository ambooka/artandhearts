import React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row, Container} from "react-bootstrap";

function Article() {

    const articles = [
        { title: "Article 1",
            content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: "src/assets/article.svg" },
        { title: "Article 2",
            content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: "src/assets/article.svg" },
        { title: "Article 3", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: "src/assets/article.svg" },
        { title: "Article 4", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: "src/assets/article.svg" },
        { title: "Article 5", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: "src/assets/article.svg" },
        { title: "Article 6", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: "src/assets/article.svg" },
        { title: "Article 7", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: "src/assets/article.svg" },
        { title: "Article 8", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: "src/assets/article.svg" },
        { title: "Article 9", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: "src/assets/article.svg" },
        { title: "Article 10", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: "src/assets/article.svg" },
        { title: "Article 11", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: "src/assets/article.svg" },
        { title: "Article 12", content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            , img: "src/assets/article.svg" },
    ];

    return (
        <Container >
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {articles.map((article, index) => (
                <Col key={index} md={4} className="project-card">
                    <Card className="project-card-view">
                        <Card.Img variant="top" src={article.img} alt="card-img" />
                        <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Text style={{ textAlign: "justify" }}>
                                {article.content}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>

        </Container>
    );
}

export default Article;
