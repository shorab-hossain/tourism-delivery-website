import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://sheltered-spire-72785.herokuapp.com/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    // Update User
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, email: user.email };
        setUser(updatedUser);
    }

    const handleEmailChange = e => {
        const updatedEmail = e.target.value;
        const updatedUser = { name: user.name, email: updatedEmail }
        setUser(updatedUser);
    }
    const handleUpdateUser = e => {
        const url = `https://sheltered-spire-72785.herokuapp.com/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setUser({});
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div className="text-center mt-2 mb-4">
            <h2>Update: {user.name}</h2>
            <p><small className="fw-bold text-primary fs-4">Tour id: {id}</small></p>
            <form onSubmit={handleUpdateUser}>
                <input className="px-4 py-2 mb-2" type="text" placeholder="your name" onChange={handleNameChange} value={user.name || ''} /><br/>
                <input className="px-4 py-2 mb-2" type="email" placeholder="your email" onChange={handleEmailChange} value={user.email || ''} /><br/>
                <input className="my-3 mb-4 mt-2 btn btn-primary" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;