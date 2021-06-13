import React from 'react';
import { Col, Container, Row, Image, Button} from 'react-bootstrap';
import './WatchOurProgram.css';
import YoutubeEmbed from "./YoutubeEmbed";
import tagline from "../../images/Tagline.png";
import { Link } from 'react-router-dom';

const WatchOurProgram = () => {
    return (
        <div className="Program">

            <Container className="Program_container">
                <h2>Watch Our Program Reviews</h2>
                <div className="lineBorder"></div>

                <Row>
                    <Col md={12} lg={12} sm={12} xl={12} xs={12}>
                        <div className="Program_Info d-flex flex-wrap">


                            <div className="video">
                                <div className="video_info">
                                    <Image src={tagline} fluid  />
                                </div>
                                <YoutubeEmbed embedId="Zk_tMSJ6fAQ" />
                                <div className="video_info">
                                    <p>
                                        Ammar a Science Teacher, thought running was the solution to getting toned here's what he discovered.
                                    </p>
                                </div>
                            </div>


                            <div className="video">
                                <div className="video_info">
                                    <Image src={tagline} fluid  />
                                </div>
                                <YoutubeEmbed embedId="cgXkJ7ak3Q0" />
                                <div className="video_info">
                                    <p>
                                        Faisal an high achieving entrepreneur and Chartered accountant, tried expensive personal trainers and boutique gyms withot any success until he discovered Fit Dad Life Mastery
                                    </p>
                                </div>
                            </div>


                            <div className="video">
                                <div className="video_info">
                                    <Image src={tagline} fluid  />
                                </div>
                                <YoutubeEmbed embedId="KdaM5mBDT6A" />
                                <div className="video_info">
                                    <p>
                                        Daniyaal an Engineer struggled with with being skinny fat despite being an active martial artist, he managed to get lean and toned at home with just bands whilst still enjoying his large portions of desi foods.
                                    </p>
                                </div>
                            </div>



                            <Link className="pr-5 getIntouchBtn" to="/login">
                                <Button>Get In Touch</Button>
                            </Link>

                        </div>
                </Col>
                </Row>
            </Container>
                   
        </div>
    );
};

export default WatchOurProgram;