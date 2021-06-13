import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Featured.css';
import Ipt from '../../images/IPT.jpg';
import onlineTrainer from '../../images/Certified-Online-Trainer.jpg';
import BBC from '../../images/bbc.jpg';
import BrithshMushlim from '../../images/british.jpg';
const Featured = () => {
    return (
        <div className="featured">
            <Container className="featured_container">
                <h2 className="featuredTitle">Featured on:</h2>
                <hr/>
                <Row >
                    <Col  md={12} lg={12} sm={12} xl={12} xs={12}>
                        <div className="featuredInfo d-flex flex-wrap">
                            <a href="#" target="_blank" >
                                <Image src={Ipt} fluid  />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <Image src={BrithshMushlim} fluid  />
                            </a>
                            <a href="#" target="_blank">
                                <Image src={onlineTrainer} fluid  />
                            </a>  
                            <a href="#home">
                                <Image src={BBC} fluid  />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Featured;