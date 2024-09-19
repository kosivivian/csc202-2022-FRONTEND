import React, { useState } from 'react';
import axios from 'axios';

const CreateBiodata: React.FC = () => {
    const headerStyle = {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: 'green',
    };

    const inputContainerStyle = {
        marginBottom: '30px',
    };

    const inputStyle = {
        borderRadius: '0.25rem',
        borderColor: '#ccc',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        width: '100%',
        padding: '8px',
    };

    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        surname: '',
        dateOfBirth: '',
        homeAddress: '',
        dateOfRegistration: '',
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/patients', formData);
            console.log('Submitted successfully:', response.data);
            setFormData({
                firstName: '',
                middleName: '',
                surname: '',
                dateOfBirth: '',
                homeAddress: '',
                dateOfRegistration: '',
            });
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-primary vh-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
    
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-3 mx-4" style={inputContainerStyle}>
                        <h3 style={headerStyle}>First Name</h3>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="flex flex-col space-y-3 mx-4" style={inputContainerStyle}>
                        <h3 style={headerStyle}>Middle Name</h3>
                        <input
                            type="text"
                            name="middleName"
                            placeholder="Enter middle name"
                            value={formData.middleName}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="flex flex-col space-y-3 mx-4" style={inputContainerStyle}>
                        <h3 style={headerStyle}>Surname</h3>
                        <input
                            type="text"
                            name="surname"
                            placeholder="Enter surname"
                            value={formData.surname}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="flex flex-col space-y-3 mx-4" style={inputContainerStyle}>
                        <h3 style={headerStyle}>Date of Birth</h3>
                        <input
                            type="date"
                            name="dateOfBirth"
                            placeholder="Enter date of birth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="flex flex-col space-y-3 mx-4" style={inputContainerStyle}>
                        <h3 style={headerStyle}>Home Address</h3>
                        <input
                            type="text"
                            name="homeAddress"
                            placeholder="Enter home address"
                            value={formData.homeAddress}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="flex flex-col space-y-3 mx-4" style={inputContainerStyle}>
                        <h3 style={headerStyle}>Date of Registration</h3>
                        <input
                            type="date"
                            name="dateOfRegistration"
                            placeholder="Enter date of registration"
                            value={formData.dateOfRegistration}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                        >
                            Add Patient
                        </button>
                    </div>
                </form>

        </div>
    </div>
    );
};

export default CreateBiodata;
