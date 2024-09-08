import React, {useEffect, useContext, useState } from 'react';
import { userContext } from './utilities';

const ProfileForm: React.FC = () => {
    const context = useContext(userContext);
    const {user, setUser} = context;
    const [image, setImage] = useState<string | null>(user.Image);

    const [formState, setFormState] = useState({
        name: user.name,
        age: user.age,
        email: user.email,
        address: user.address,
        state: user.state,
        phone: user.phone,
    });

    useEffect(() =>{
        setImage(user.Image);
        setFormState({
            name: user.name,
            age: user.age,
            email: user.email,
            address: user.address,
            state: user.state,
            phone: user.phone,
        })
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUser({
            ...user,
            ...formState,
            Image: image,
        });
    };
    return (
        <form onSubmit={handleSubmit} className="container mt-5">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              className="form-control"
              id="age"
              name="age"
              value={formState.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formState.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              value={formState.state}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Profile Image:</label>
            <input
              type="file"
              className="form-control-file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
            <button type="submit">Save changes</button>
        </form>
    );
};

export default ProfileForm;
