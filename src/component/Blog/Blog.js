import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Blog.css';
import blogImg1 from '../../images/Sustainable_LI-1024x789.jpg';
import blogImg2 from '../../images/Ramadan-1-1024x427.jpg';
import blogImg3 from '../../images/My-Videos-1024x910.jpg';
import blogImg4 from '../../images/getting-lean-as-well-as-big.jpg';

const Blog = () => {
    return (
        <div className="blog_Row">
            <hr/>
            <article className="blogTitle">WANT TO LEARN MORE?</article>
            <p>Check out these articles below</p>
            <div className="footer_post">
                <Row className="mt-3 pt-5">
                    <Col className="blog_Column mb-2" md={3} lg={3} sm={6} xl={3} xs={12}>
                        <div className="blog_Info">
                            <img src={blogImg1} alt=""/>
                            <article>Kaanfitness Origins – The Kaanfitness Journey</article>
                            <Button>Read More</Button>
                        </div>
                    </Col>
                    <Col className="blog_Column  mb-2" md={3} lg={3} sm={6} xl={3} xs={12}>
                        <div className="blog_Info">
                            <img src={blogImg2} alt=""/>
                            <article>Kaanfitness Origins – The Kaanfitness Journey</article>
                            <Button>Read More</Button>
                        </div>
                    </Col>
                    <Col className="blog_Column mb-2" md={3} lg={3} sm={6} xl={3} xs={12}>
                        <div className="blog_Info">
                            <img src={blogImg3} alt=""/>
                            <article>Kaanfitness Origins – The Kaanfitness Journey</article>
                            <Button>Read More</Button>
                        </div>
                    </Col>
                    <Col className="blog_Column  mb-2" md={3} lg={3} sm={6} xl={3} xs={12}>
                        <div className="blog_Info">
                            <img src={blogImg4} alt=""/>
                            <article>Kaanfitness Origins – The Kaanfitness Journey</article>
                            <Button>Read More</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Blog;