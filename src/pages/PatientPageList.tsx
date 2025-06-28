import React, {useState} from "react";
import {patients} from "../contents/patient";
import PatientCard from "../components/PatientCard";

export default function PatientPageList() {
    const [statusFilter, setStatusFilter] = useState("ALL")
    const filteredPatiets = statusFilter === "ALL"
        ? patients : patients.filter(p => p.status === statusFilter);
    return (
        <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4">
                <label htmlFor="status" className="mr-2 font-semibold"> Filter by status</label>
                <select
                    id="status"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border rounded px-2 py-1"
                >
                    <option value="ALL">ALL</option>
                    <option value="Completed">Completed</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>
            {/*{patients.map((p) => (*/}
            {/*    <PatientCard key={p.id} patient={p}/>*/}
            {/*))}*/}
            {filteredPatiets.map((p) => (
                <PatientCard key={p.id} patient={p}/>
            ))}
        </div>
    );
}