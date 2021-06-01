import React from 'react';
import { Card, CardImg, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AllServices = ({product}) => {
    const {imageURL, name, descrition, price, facilities1, facilities2, facilities3} = product;
    return (
            <Col xs={12} sm={12} md={6} lg={4}>
                <Card className="mt-3 services_section">
                    <div className="card_image">
                        <CardImg  variant="top" src={imageURL} />
                    </div>
                    
                    <Card.Body>
                    <Card.Title className="small-text-band">{name}</Card.Title>
                    <Card.Text className="text-secondary">
                        {descrition}
                    </Card.Text>
                    <Card.Text className="text-secondary">
                        <strong>${price} <small>/mo</small></strong>
                    </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem className="text-muted">
                            {facilities1}
                        </ListGroupItem>
                        <ListGroupItem className="text-muted">
                            {facilities2}
                        </ListGroupItem>
                        <ListGroupItem className="text-muted">
                            {facilities3}
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Footer className="footer">
                        <Link className="ardButton" to={`service/checkout/${product._id}`}>
                            <Button>BECOME A MEMBER</Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>




    );
};

export default AllServices;