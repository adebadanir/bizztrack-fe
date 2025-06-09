interface statusBadgeProps {
  type: 'Approved' | 'Pending Manager' | 'Pending Finance';
}

function StatusBadge({ type }: statusBadgeProps) {
  const styleMap: Record<string, string> = {
    Approved: 'bg-approved-100 text-white  rounded-full px-4 py-2 w-fit',
    'Pending Manager':
      'bg-pending-100 text-white  rounded-full px-4 py-2 w-fit ',
    'Pending Finance':
      'bg-pending-100 text-white  rounded-full px-4 py-2 w-fit ',
  };

  console.log(`Rendering StatusBadge with type: ${type}`);

  return (
    <div className={`${styleMap[type]}`}>
      <div>{type}</div>
    </div>
  );
}

export default StatusBadge;
