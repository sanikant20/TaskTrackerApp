import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row justify-content-center align-items-center">
                    <h4 style={{ color: 'red' }} className="text-center mb-2 mb-sm-5">Sorry!! Page Not Found</h4>
                    <img
                        src="/PageNotFound.jpg"
                        style={{ width: "100%", height: "300px", objectFit: "contain" }} alt="PageNotFoundLogo"></img>
                    <button className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
                        <Link to="/" className="text-white text-decoration-none">Home Page</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
