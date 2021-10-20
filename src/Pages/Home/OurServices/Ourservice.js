import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Card } from 'react-bootstrap';
import './Ourservic.css'


const Ourservice = () => {
    const [servies, setSerives] = useState([])

    useEffect(() => {
        fetch('./ourservic.json')
            .then(res => res.json())
            .then(data => setSerives(data))
    }, [])
    return (
        <div>
            <h2 className="text-primary mt-5 text-uppercase">Specialities</h2>
            <Row className="row p-5 gy-4 bg-muted">

                {servies.map((service) => {
                    const { name, detil, img } = service;
                    return (
                        <>

                            <Col md={4}
                                key={servies}>

                                <Card className="shadow shadowStyle " style={{ width: '18rem' }}>
                                    <Card.Img variant="top " src={img} />
                                    <Card.Body>
                                        <Card.Title className="text-warning">{name}</Card.Title>
                                        <Card.Text>
                                            {detil}
                                        </Card.Text>
                                        <Button variant="dark px-4">Details</Button>
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

export default Ourservice;
