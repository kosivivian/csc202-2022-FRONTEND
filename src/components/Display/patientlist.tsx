import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Patient {
  id: number;
  firstName: string;
  surname: string;
  middleName: string;
  dateOfBirth: string;
  homeAddress: string;
  dateOfRegistration: string;
}

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [formData, setFormData] = useState<Patient>({
    id: 0,
    firstName: '',
    surname: '',
    middleName: '',
    dateOfBirth: '',
    homeAddress: '',
    dateOfRegistration: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:3000/patients');
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const deletePatient = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/patients/${id}`);
      fetchPatients();
      setSelectedPatient(null);
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const handleUpdate = (patient: Patient) => {
    setSelectedPatient(patient);
    setFormData(patient);
  };

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
      await axios.put(`http://localhost:3000/patients/${formData.id}`, formData);
      fetchPatients();
      setSelectedPatient(null); // Clear the selected patient after update
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  const handleViewClinicalRecords = (patient: Patient) => {
    navigate(`/recordslist/${patient.id}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-green-800 text-4xl font-extrabold mb-4 text-center">Patient Records</h1>
      
      {selectedPatient && (
        <div className="bg-white p-4 mb-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Update Patient</h2>
          <form onSubmit={handleSubmit}>
            {['firstName', 'middleName', 'surname', 'dateOfBirth', 'homeAddress', 'dateOfRegistration'].map((field, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-bold mb-2">{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
                <input
                  type={field.includes('Date') ? 'date' : 'text'}
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
            <button type="submit" className="bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded">
              Update Patient
            </button>
            <button
              type="button"
              className="bg-pink-500 hover:bg-pink-900 text-white py-2 px-4 rounded ml-2"
              onClick={() => setSelectedPatient(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      <table className="min-w-full bg-white">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="w-1/8 px-4 py-2">ID</th>
            <th className="w-1/8 px-4 py-2">First Name</th>
            <th className="w-1/8 px-4 py-2">Surname</th>
            <th className="w-1/8 px-4 py-2">Middle Name</th>
            <th className="w-1/8 px-4 py-2">Date of Birth</th>
            <th className="w-1/8 px-4 py-2">Address</th>
            <th className="w-1/8 px-4 py-2">Date Of Registration</th>
            <th className="w-1/8 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td className="border px-4 py-2">{patient.id}</td>
              <td className="border px-4 py-2">{patient.firstName}</td>
              <td className="border px-4 py-2">{patient.surname}</td>
              <td className="border px-4 py-2">{patient.middleName}</td>
              <td className="border px-4 py-2">{patient.dateOfBirth}</td>
              <td className="border px-4 py-2">{patient.homeAddress}</td>
              <td className="border px-4 py-2">{patient.dateOfRegistration}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => deletePatient(patient.id)}
                  className="bg-pink-300 hover:bg-pink-600 text-white py-1 px-2 rounded-md"
                >
                  Delete
                </button>
                <button 
                  onClick={() => handleUpdate(patient)} 
                  className="bg-pink-300 hover:bg-pink-600 text-white py-1 px-2 rounded-md"
                >
                  Update
                </button>
                <button 
                  onClick={() => handleViewClinicalRecords(patient)} 
                  className="bg-blue-300 hover:bg-blue-600 text-white py-1 px-2 rounded-md"
                >
                  View Clinical Records
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
