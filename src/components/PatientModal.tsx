import {Patient} from "../types";

interface PatientModalProps {
    patient: Patient;
    onClose: () => void;
}

export default function PatientModal({patient, onClose}: PatientModalProps) {
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">{patient.name}</h2>
                <p><strong>Procedure:</strong>{patient.procedure}</p>
                <p><strong>Notes:</strong>{patient.notes}</p>
                <button onClick={onClose} className="mt-4 text-blue-500">Close</button>
            </div>
        </div>
    );
}