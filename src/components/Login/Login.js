import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(e.target.email.value, e.target.password.value);
    }

    return (
        <div className='card mx-auto mt-5 p-5 shadow form'>
            <h1 className='fw-normal text-center mb-4'>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <input className='form-control fs-5' placeholder='Your Email' type="email" name='email' />
                </div>
                <div className="mb-4">
                    <input className='form-control fs-5' placeholder='Your Password' type="password" name='password' />
                </div>
                <input className='btn w-100 btn-lg fs-4' type="submit" value="Login" />
            </form>
            <p className='mt-2 fs-5 fw-light text-center mb-2'>New to Jacob Billy? <Link style={{ color: '#83b735' }} to='/signup'>Create New Account</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Login;