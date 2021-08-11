import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './GetInTouch.css';
import get_InTouch_Img from '../../images/Isolated-background.jpg';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
    return (
        <div className="get_InTouch">
            <Container fluid>
                <Row>
                    <Col md={6} lg={6} sm={6} xl={6} xs={12}>
                        {/* <img src={get_InTouch_Img} alt="Get In touch Image"/> */}
                        <Image src={get_InTouch_Img} alt="Get In touch Image" fluid />
                    </Col>
                    <Col md={6} lg={6} sm={6} xl={6} xs={12}>
                        <Container>
                            <h2>Get the Top 10 Weight Loss Myths Keeping you Fat</h2>
                            <article>It's time to end the frustration and get unstuck lose weight, build muscle, live longer, grow your brain and experience a paradigm shift just enter your best email below to get it:</article>
                            <hr/>
                            <input placeholder="your name" type="text"/>
                            <hr/>
                            <input placeholder="email" type="email" name="" id=""/>
                            <hr/>
                            <Link><Button type="submit" value="">Send</Button></Link>
                            <hr/>

                            <iframe src="https://g.page/r/CYbXVB9ORpZ8EAg/review" frameborder="0"></iframe>
                            <iframe src="https://www.google.com/search?q=kaanfitness&oq=k&aqs=chrome.1.69i60j69i59l2j69i57j69i60j69i61j69i65j69i60.1623j0j4&sourceid=chrome&ie=UTF-8#lrd=0x487bb7e2db5478dd:0x84762da1ea1c9c68,1,,," frameborder="0"></iframe>
                        </Container>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default GetInTouch;