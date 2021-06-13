import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Featured_About.css';
import featuredImg from '../../images/Main-File-140321.jpg';
const Featured_About = () => {
    return (
        <div className="Featured_About">
        <Container>
            <Row className="pt-5 pb-5">
                <Col  md={6} lg={6} sm={6} xl={6} xs={12}>
                    <div className="pl-3 pr-3">
                        <h2>How Fit Dad Life Mastery Minimalist Method Online Weight Loss Coaching Works</h2>
                        <article>I understand the difficulties faced by professional desi's trying to lose weight. That's why our unique comprehensive approach which has been refined over many years to make it a perfect for Desi Professionals, works so well.  It's completely different.  We can guarantee you've never experienced anything like it before. Scroll down to see what others are saying.   If you had you would NEVER struggle with your weight ever again.

                        <strong>
                             Real one on one professional coaching with a real person delivered via your own state of the art dedicated coaching app.
                        </strong>
                        </article>
                    </div>
                </Col>
                <Col className="Featured_Img" md={6} lg={6} sm={6} xl={6} xs={12}>
                    <div className="">
                        <Image src={featuredImg} fluid  />
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Featured_About;