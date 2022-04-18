import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const Checkout = () => {

    const { id } = useParams();

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json').then(res => res.json()).then(data => setServices(data))
    }, []);

    console.log(services)

    const [user] = useAuthState(auth);

    // const service = services.find(serviceItem => serviceItem.id === id);

    return (
        <div className='card mx-auto mt-5 p-5 shadow form'>
            <h1 className='fw-normal text-center mb-4'>Checkout</h1>
            <form>
                <div className="mb-4">
                    <label className='form-label fs-5' htmlFor="email">Email:</label>
                    <input className='form-control fs-5' type="email" value={user && user.email} name='email' />
                </div>
                <div className="mb-4">
                    <label className='form-label fs-5' htmlFor="price">Price:</label>
                    <input className='form-control fs-5' type="text" name='price' />
                </div>
                <div className="mb-4">
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option defaultValue>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <input className='btn w-100 btn-lg fs-4' type="submit" value="Confirm" />
            </form>
        </div>
    );
};

export default Checkout;