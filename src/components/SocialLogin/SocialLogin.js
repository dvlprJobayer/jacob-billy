import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className='social'>
            <div className='d-flex align-items-center justify-content-center mb-3'>
                <div className='or' style={{ height: '1px', width: '150px' }}></div>
                <div className='or-text mx-2 mb-1'>or</div>
                <div className='or' style={{ height: '1px', width: '150px' }}></div>
            </div>
            <button className='btn btn-lg w-100 fs-4 mb-4 d-flex align-items-center justify-content-center'><FcGoogle /> <p style={{ width: '95%' }} className='mb-1'>Continue with Google</p></button>
            <button className='btn btn-lg w-100 fs-4 d-flex align-items-center justify-content-center'><FaTwitter /> <p style={{ width: '95%' }} className='mb-1'>Continue with Twitter</p></button>
        </div>
    );
};

export default SocialLogin;