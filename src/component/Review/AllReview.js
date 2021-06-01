import React from 'react';
import { Card, CardImg, Col } from 'react-bootstrap';

const AllReview = ({review}) => {
    const {imageURL, name, description, title} = review;
    return (
        <Col className="mt-5 pt-5 Review_section" xs={12} sm={12} md={6} lg={4}>
             <Card className="mt-3">
                 <div className="card_image">
                     <CardImg  variant="top" src={imageURL} />
                 </div>
                <Card.Body>
                    <Card.Footer className="footer">
                        <Card.Title>{name}</Card.Title>
                        <small className="text-muted" ><strong>{title}</strong></small>
                    </Card.Footer>
                    <Card.Text className="text-secondary pb-5">
                        <h2>“{description}”</h2>
                    </Card.Text>
                    </Card.Body>
            </Card>
        </Col>
    );
};

export default AllReview;