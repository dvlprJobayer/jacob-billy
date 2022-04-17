import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(e.target.email.value, e.target.password.value);
    }

    return (
        <div className='card mx-auto mt-5 p-5 shadow form'>
            <h1 className='fw-normal text-center mb-4'>Sign up</h1>
            <form onSubmit={handleRegister}>
                <div className="mb-4">
                    <input className='form-control fs-5' placeholder='Your Email' type="email" name='email' />
                </div>
                <div className="mb-4">
                    <input className='form-control fs-5' placeholder='Your Password' type="password" name='password' />
                </div>
                <div className="mb-4">
                    <input className='form-control fs-5' placeholder='Confirm Password' type="password" name='confirmPassword' />
                </div>
                <input className='btn w-100 btn-lg fs-4' type="submit" value="Login" />
            </form>
            <p className='mt-2 fs-5 fw-light text-center mb-2'>Already have an account? <Link style={{ color: '#83b735' }} to='/login'>Login</Link></p>
            <SocialLogin />
        </div>
    );
};

export default SignUp;