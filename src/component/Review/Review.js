import React, { useEffect, useState } from 'react';
import { Container,  Row } from 'react-bootstrap';
import AllReview from './AllReview';
import './Review.css';
const Review = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://infinite-woodland-54699.herokuapp.com/allReview')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

    return (
        <div className="Review_Area">
        <Container className="">
            <article>TESTIMONIAL</article>
            <h2>What my clients are saying:</h2>
            <Row>

                {
                    review.length === 0 && <div className="spinner-border text-info spiner" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                }

                {
                    review.map(review => <AllReview className="Review_section" key={review._id} review={review}></AllReview>)
                }
            </Row>
        </Container>
        </div>
    );
};

export default Review;