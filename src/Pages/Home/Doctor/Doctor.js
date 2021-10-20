import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Doctor.css'

const Doctor = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/doctor.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (
        <div>
        <section className='showcase'>
              <div className='showcase-overlay'>
                <h1>Trusted Specialist Doctors</h1>
              </div>
            </section>
                <div>
                
                    <div className="row p-5 gy-4 bg-muted">
                    
                        {data.slice(0,6).map((doctor) => {
                            const { name, skil,phone, img } = doctor;
                            return (
                                <>
                                
                                    <div
                                        className="col-lg-4 col-md-6 "
                                        key={doctor}>
                                            <div class="card shadow" style={{width: "18rem"}}>
                                             <img src={img} class="card-img-top" alt="..." />
                                            <div class ="card-body style">
                                             <h3>name: {name}</h3>
                                            <p>skil: {skil}</p>
                                            <h5 class ="card-title">phone:  {phone}</h5>
                                            <Button  class ="btn btn-danger">Details here</Button>
                                            </div>
                                        </div>
        
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
                </div>
    );
};

export default Doctor;