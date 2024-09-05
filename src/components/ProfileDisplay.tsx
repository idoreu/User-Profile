import React from 'react';
import { UserData } from './utilities';

interface ProfileDisplayProps {
    userData: UserData;
    userImage: string| null;
}

const ProfileDisplay: React.FC<ProfileDisplayProps> = ({userData, userImage}) => {
    return (
        <div>
            <h2>Profile Information</h2>
            {userImage && <img src={userImage} alt="User profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />}
            <p>Name: {userData.name}</p>
            <p>Age: {userData.age}</p>
            <p>Email: {userData.email}</p>
            <p>Address: {userData.address}</p>
            <p>State: {userData.state}</p>
            <p>Phone: {userData.phone}</p>
        </div>
    );
};

export default ProfileDisplay;