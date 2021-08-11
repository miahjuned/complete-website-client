import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './BlogPost.css';
const BlogPost = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [blogPost, setblogPost] = useState([]);

    useEffect(() => {
        fetch('https://infinite-woodland-54699.herokuapp.com/allBlogPost')
        .then(res => res.json())
        .then(data => setblogPost(data))
    }, [])

     
    return (
        <div className="service_area blog_Area">
            <Container>
                <article> Hi {loggedInUser.displayName}! WANT TO LEARN MORE?</article>
                <h2>Check out these articles below</h2>
                <Row>
                    {
                        blogPost.length === 0 && <div className="spinner-border text-info spiner" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    }

                    {
                        blogPost.map(blogPost => <Col className="services_section" md={6} lg={3} sm={6} xl={3} xs={12} key={blogPost._id} blogPost={blogPost}>
                            <Card className="card_container mb-4" >
                                <CardImg style={{height: '200px'}} variant="top" src={blogPost.imageURL}>
                                </CardImg>
                                <Card.Body>
                                    <Card.Text>
                                        {blogPost.title}
                                    </Card.Text>
                                    <Link className="CardButton" to={`service/checkout/${blogPost._id}`}><Button>Read more</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default BlogPost;