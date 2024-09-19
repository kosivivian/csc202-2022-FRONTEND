import React, { useState } from 'react';
import axios from 'axios';
const CreateClinicalRecord: React.FC = () => {

    const headerStyle = {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: 'green',
    };

    const inputContainerStyle = {
        marginBottom: '20px',
    };

    const inputStyle = {
        borderRadius: '0.25rem',
        borderColor: '#ccc',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        width: '100%',
        padding: '8px',
    };

    const [formData, setFormData] = useState({
        clinicDate: '',
        patientId: '',
        natureOfAilment: '',
        medicinePrescribed: '',
        procedureUndertaken: '',
        nextAppointmentDate: '',
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
            const response = await axios.post('http://localhost:3000/clinical-records', formData);
            console.log('Submitted successfully:', response.data);

            setFormData({
                clinicDate: '',
                patientId: '',
                natureOfAilment: '',
                medicinePrescribed: '',
                procedureUndertaken: '',
                nextAppointmentDate: '',
            });
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-50'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col space-y-3 mx-4' style={inputContainerStyle}>
                        <h3 style={headerStyle}>Clinic Date</h3>
                        <input
                            type="date"
                            name="clinicDate"
                            placeholder="Enter clinic date"
                            value={formData.clinicDate}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className='flex flex-col space-y-3 mx-4' style={inputContainerStyle}>
                        <h3 style={headerStyle}>Patient ID</h3>
                        <input
                            type="text"
                            name="patientId"
                            placeholder="Enter ID of patient"
                            value={formData.patientId}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className='flex flex-col space-y-3 mx-4' style={inputContainerStyle}>
                        <h3 style={headerStyle}>Nature of Ailment</h3>
                        <input
                            type="text"
                            name="natureOfAilment"
                            placeholder="Enter name of ailment"
                            value={formData.natureOfAilment}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className='flex flex-col space-y-3 mx-4' style={inputContainerStyle}>
                        <h3 style={headerStyle}>Medicine Prescribed</h3>
                        <input
                            type="text"
                            name="medicinePrescribed"
                            placeholder="Enter medicine prescribed"
                            value={formData.medicinePrescribed}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className='flex flex-col space-y-3 mx-4' style={inputContainerStyle}>
                        <h3 style={headerStyle}>Procedure Undertaken</h3>
                        <input
                            type="text"
                            name="procedureUndertaken"
                            placeholder="Enter procedure undertaken"
                            value={formData.procedureUndertaken}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className='flex flex-col space-y-3 mx-4' style={inputContainerStyle}>
                        <h3 style={headerStyle}>Date of Next Appointment</h3>
                        <input
                            type="date"
                            name="nextAppointmentDate"
                            placeholder="Enter date of next appointment"
                            value={formData.nextAppointmentDate}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                        >
                            Add Record
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateClinicalRecord;
