import React, { useContext } from 'react';
import { userContext } from './utilities';

function ProfileDisplay() {
    const userCntxt = useContext(userContext);

    const {user} = userCntxt;

    return (
        <div className='container mt-5'>
            <h2 className='container mb-4'>Profile Information</h2>
            <div className='card' style={{ maxWidth: '18rem' }}>
                {user.Image && (
                    <img
                    src={user.Image}
                    className='card-img-top'
                    alt="User profile"
                    style={{ width: '100px', height: '100px', borderRadius: '15%' }}
                    />
                )}
            </div>
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                    <strong>Age:</strong> {user.age}<br />
                    <strong>Email:</strong> {user.email}<br />
                    <strong>Address:</strong> {user.address}<br />
                    <strong>State:</strong> {user.state}<br />
                    <strong>Phone:</strong> {user.phone}
                </p>
            </div>
        </div>
    );
};

export default ProfileDisplay;
