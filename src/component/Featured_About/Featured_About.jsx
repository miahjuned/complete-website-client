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
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quod!</h2>
                        <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex praesentium aliquid corrupti est sit aspernatur officiis non. Aliquid aut amet laborum voluptatem dolores, eaque expedita et consequuntur at unde nulla illo magni praesentium animi eius enim accusamus incidunt dolorem totam blanditiis possimus, repellat error dicta cumque! Laborum quae doloribus officiis.</article>
                    </div>
                </Col>
                <Col  md={6} lg={6} sm={6} xl={6} xs={12}>
                    <Image src={featuredImg} fluid  />
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Featured_About;