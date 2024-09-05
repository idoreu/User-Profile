import React, { useState } from 'react';
import { UserData } from './utilities';

interface ProfileFormProps { 
    onSave: (data: UserData, image: string | null) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({onSave}) => {
    const [formState, setFormState] = useState<UserData>({
        name: '',
        age : '',
        email : '',
        address : '',
        state : '',
        phone : '' 
    });

    const [image, setImage] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]){
            const file = e.target.files[0];
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name] : value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSave(formState, image);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type="text" 
                name="name"
                value={formState.name}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Age</label>
                <input 
                    type="text"
                    name="age"
                    value={formState.age}
                    onChange={handleChange} 
                    />
            </div>
            <div>
                <label>Email</label>
                <input 
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={handleChange} 
                    />
            </div>
            <div>
                <label>Address</label>
                <input 
                    type="text"
                    name="address"
                    value={formState.address}
                    onChange={handleChange} 
                    />
            </div>
            <div>
                <label>State</label>
                <input 
                    type="text"
                    name="state"
                    value={formState.state}
                    onChange={handleChange} 
                    />
            </div>
            <div>
                <label>Phone</label>
                <input 
                    type="text"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange} 
                    />
            </div>
            <div>
                <label>Profile Image:</label>
                <input type="file"
                accept="image/*" 
                onChange={handleImageChange} 
                />
            </div>
            <button type="submit">Save changes</button>
        </form>
    );
};

export default ProfileForm;
