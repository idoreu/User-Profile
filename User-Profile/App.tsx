// import logo from './logo.svg';
import React, {useReducer, useState} from 'react';
import './App.css';
import ProfileForm from './components/profileForm';
import ProfileDisplay from './components/ProfileDisplay';
import { UserData } from './components/utilities';

function App() {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    age: '',
    email: '',
    address: '',
    state: '',
    phone: ''
  });

  const [userImage, setUserImage] = useState<string | null>(null);

  const handleSave = (data: UserData, image: string | null) => {
    setUserData(data);
    setUserImage(image);
  }; 

  return (
    <div>
      <h1>User Profile</h1>
      <ProfileForm onSave={handleSave} />
      <ProfileDisplay userData={userData} userImage={userImage}/>
    </div>
  );
}

export default App;
