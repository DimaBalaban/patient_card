export interface Patient {
    id: string;
    name: string;
    lastVisit: string;
    procedure: string;
    status: 'Completed' | 'Scheduled' | 'Cancelled';
    notes: string;
}
