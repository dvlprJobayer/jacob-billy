import React from 'react';

const Loading = () => {
    return (
        <div className="text-center mt-5 pt-5">
            <div style={{ color: '#83b735' }} class="spinner-border mt-5" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;