import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Card } from 'react-bootstrap';
import "./Services.css"


const Services = () => {
    const [servies, setSerives] = useState([])

    useEffect(() => {
        fetch('/servies.json')
            .then(res => res.json())
            .then(data => setSerives(data))
    }, [])
    return (
        <div>
            <h2 className="text-primary mt-5">Popular Service</h2>
            <Row className="row p-5 gy-4 bg-muted">

                {servies.map((service) => {
                    const { name, skil,hospital, img } = service;
                    return (
                        <>

                            <Col md={4}
                                key={Services}>

                                <Card className="edit" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body className="styling">
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Title>{hospital}</Card.Title>
                                        <Card.Text>
                                            {skil}
                                        </Card.Text>
                                        <Button className="py-1 my-3" variant="warning px-4">Detils</Button>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </>
                    );
                })}

            </Row>

        </div>

    );
};

export default Services;
