import {patients} from "../contents/patient";
import PatientCard from "../components/PatientCard";

export default function PatientPageList() {
    return (
        <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {patients.map((p) => (
                <PatientCard key={p.id} patient={p}/>
            ))}
        </div>
    );
}