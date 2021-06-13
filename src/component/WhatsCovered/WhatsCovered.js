import React from 'react';
import { Container , Row, Col, Button} from 'react-bootstrap';
import './WhatsCovered.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideVirus, faRecycle, faFillDrip, faCog , faGem, faSwatchbook} from '@fortawesome/free-solid-svg-icons';

const WhatsCovered = () => {
    return (
        <div className="Coverd">
            <Container className="Coverd_container">
                <h2>What's Covered</h2>
                {/* <div className="lineBorder"></div> */}
                <Row>
                    <Col md={12} lg={12} sm={12} xl={12} xs={12}>
                        <div className="Coverd_Info d-flex flex-wrap">

                            <div className="Coverd_Content">
                                <FontAwesomeIcon className="icon" icon={faHeadSideVirus} />
                                <h4>
                                    Mindset Rewiring
                                </h4>
                                <p>
                                    You're stuck because of the stories you're telling yourself. Your limiting beliefs. Not a lack of information, diet plans or workouts.  We help you to rewire your brain for permanent change by removing you limiting beliefs and installing a growth mindset.
                                </p>
                            </div>

                            <div className="Coverd_Content">
                                <FontAwesomeIcon className="icon" icon={faRecycle} />
                                <h4>
                                    Behaviour Change
                                </h4>
                                <p>
                                     Permanent weight loss will require some lifestyle changes. You can't expect a different result by doing the same things over and over again. As scary as this may sound, it really isn't with our unique behaviour change process using the S3 Method. Every change will be simple, sensible and sustainable. 
                                </p>
                            </div>

                            <div className="Coverd_Content"> 
                                <FontAwesomeIcon className="icon" icon={faFillDrip} />
                                <h4>
                                    Personalised Nutrition Coaching
                                </h4>
                                <p>
                                    It's not a diet plan because diet plans are temporary and don't work.  We use our unique Easy Lean System, Food Taqwa and Ta'aamun Tayyib approach to slightly modify your existing diet so it's balanced, healthy, tasty and sustainable. 
                                </p>
                            </div>

                            <div className="Coverd_Content">
                                <FontAwesomeIcon className="icon" icon={faCog} />
                                <h4>
                                    Personalised Workouts
                                </h4>
                                <p>
                                    Personalised programming ensures we work with you where you're at right to provide you a workout that is suitable for you, based on you training history, injuries, preferences and goals. One of the biggest mistake people make is copying insta-influencers or celebrity workouts they see online. 
                                </p>
                            </div>

                            <div className="Coverd_Content">
                                    <FontAwesomeIcon className="icon" icon={faGem} />
                                <h4>
                                    Professional Support and Accountability
                                </h4>
                                <p>
                                    People fail because they don't have a strong support network. With Fit Dad Life Mastery you will be getting elite level coaching as well as daily support and accountability, from our coaches as well as the successful clients you see above and peers
                                </p>
                            </div>

                            <div className="Coverd_Content">
                                <FontAwesomeIcon className="icon" icon={faSwatchbook} />
                                <h4>
                                    Progress Tracking
                                </h4>
                                <p>
                                    We manage expectations, set appropriate goals and track your progress accurately so you stay motivated and continue to see progress in many different areas and in your general quality of life.
                                </p>
                            </div>


                            <Link className="pr-5 coverdBtn" to="/login">
                                <Button>Learn More</Button>
                            </Link>


                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default WhatsCovered;