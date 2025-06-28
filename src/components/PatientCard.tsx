import React, {useState} from 'react';
import {Patient} from '../types';
import StatusBadge from './StatusBadge';
import PatientModal from './PatientModal';

interface PatientCardProps {
    patient: Patient;
}

export default function PatientCard({patient}: PatientCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className="bg-blue-100 rounded shadow-md p-4 transform transition-transform duration-300 ease-in-out  hover:scale-105 opacity-0 animate-fade-in-soft ">
                {/*<div className="bg-blue-100 rounded shadow-md p-4">*/}
                <div className="text-lg font-semibold">{patient.name}</div>
                <div className="text-sm text-gray-500">{patient.procedure}</div>
                <div className="text-sm text-gray-400">Last visit: {patient.lastVisit}</div>
                <StatusBadge status={patient.status}/>
                <button onClick={() => setIsModalOpen(true)} className="mt-2 text-blue-500">
                    More details
                </button>
            </div>

            {isModalOpen && (
                <PatientModal
                    patient={patient}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}