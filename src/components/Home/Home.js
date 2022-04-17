import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json').then(res => res.json()).then(data => setServices(data))
    }, []);

    return (
        <>
            <Banner />
            <div className="container mt-4 services-container">
                <h2 className='text-center h1'>Want me to shoot you?</h2>
                <div className="row mt-4">
                    {
                        services.map(service => <Service key={service.id} service={service} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;