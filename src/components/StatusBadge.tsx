interface Props{
    status:'Completed' | 'Scheduled' | 'Cancelled';
}
export default function StatusBadge({status}: Props){
    const colorMap:Record<Props['status'], string> = {
        Completed: 'text-green-600',
        Scheduled: 'text-blue-600',
        Cancelled: 'text-red-600',
    };
    return (
        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${colorMap[status]}`}>
            {status}
        </span>
    );
}