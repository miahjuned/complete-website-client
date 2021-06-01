import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllServices from './AllServices';
import './Services.css';
const Services = () => {
    
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://infinite-woodland-54699.herokuapp.com/allServices')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

     
    return (
        <div className="service_area">
            <Container>
                <article>OUR SERVICES PRICING PLANS</article>
                <h2>A Plan For Every Price</h2>
                <Row>
                    {
                        product.length === 0 && <div className="spinner-border text-info spiner" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    }

                    {
                        product.map(product => <AllServices className="" md={6} lg={3} sm={6} xl={3} xs={12} key={product._id} product={product}>
                        </AllServices>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;