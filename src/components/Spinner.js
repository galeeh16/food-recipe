import React from 'react';

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center w-100 mb-5">
            <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;