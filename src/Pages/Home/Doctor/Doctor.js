import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Doctor.css'

const Doctor = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/Doctor.json')
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
                <div className='Backgroun-img'>
                
                    <div className="row p-5 gy-4 bg-muted">
                    
                        {data.slice(0,6).map((home) => {
                            const { name, skil,phone, img } = home;
                            return (
                                <>
                                
                                    <div
                                        className="col-lg-4 col-md-6"
                                        key={home}>
                                            <div class="card shadow" style={{width: "18rem"}}>
                                             <img src={img} class="card-img-top" alt="..." />
                                            <div class ="card-body all-card">
                                             <h3>name: {name}</h3>
                                            <p>skil: {skil}</p>
                                            <h5 class ="card-title">phone:  {phone}</h5>
                                            <Button  class ="btn btn-dark">Details here</Button>
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