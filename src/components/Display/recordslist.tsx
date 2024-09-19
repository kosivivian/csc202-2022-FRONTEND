import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface ClinicalRecord {
  id: number;
  patientId: number;
  clinicDate: string;
  natureOfAilment: string;
  medicinePrescribed: string;
  procedureUndertaken: string;
  nextAppointmentDate: string;
}

const RecordsList: React.FC = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const [clinicalRecords, setClinicalRecords] = useState<ClinicalRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchClinicalRecords();
  }, []);

  const fetchClinicalRecords = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/clinical-records?patientId=${patientId}`);
      setClinicalRecords(response.data);
    } catch (error) {
      console.error('Error fetching clinical records:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-green-800 text-4xl font-extrabold mb-4 text-center">Clinical Records</h1>
      {loading ? (
        <p>Loading clinical records...</p>
      ) : clinicalRecords.length > 0 ? (
        <table className="min-w-full bg-white">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="w-1/6 px-4 py-2">ID</th>
              <th className="w-1/6 px-4 py-2">Clinic Date</th>
              <th className="w-1/6 px-4 py-2">Nature of Ailment</th>
              <th className="w-1/6 px-4 py-2">Medicine Prescribed</th>
              <th className="w-1/6 px-4 py-2">Procedure Undertaken</th>
              <th className="w-1/6 px-4 py-2">Date of Next Appointment</th>
            </tr>
          </thead>
          <tbody>
            {clinicalRecords.map(record => (
              <tr key={record.id}>
                <td className="border px-4 py-2">{record.id}</td>
                <td className="border px-4 py-2">{record.clinicDate}</td>
                <td className="border px-4 py-2">{record.natureOfAilment}</td>
                <td className="border px-4 py-2">{record.medicinePrescribed}</td>
                <td className="border px-4 py-2">{record.procedureUndertaken}</td>
                <td className="border px-4 py-2">{record.nextAppointmentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Patient has no clinical records.</p>
      )}
    </div>
  );
};

export default RecordsList;
