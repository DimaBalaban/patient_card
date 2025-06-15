import {Patient} from "../types";

export const patients: Patient[] = [
    {
        id: 'PT-1609',
        name: 'Dima Bala',
        lastVisit: '2025-05-30',
        procedure: 'Skin tidhtening - Fade',
        status: 'Completed',
        notes: 'No side effect. Great result.'
    },
    {
        id: 'PT-1610',
        name: 'Ronny',
        lastVisit: '2025-06-22',
        procedure: 'Skin Protected',
        status: 'Scheduled',
        notes: 'Waiting for a few days.'
    },
    {
        id: 'PT-1611',
        name: 'Alona Bala',
        lastVisit: '2025-04-11',
        procedure: 'Heir removal',
        status: 'Cancelled',
        notes: 'No effect.'
    },
]