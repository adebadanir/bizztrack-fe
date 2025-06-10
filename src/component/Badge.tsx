interface badgeProps {
  type: 'Approved' | 'Pending Manager' | 'Pending Finance' | 'Badge';
}

function Badge({ type }: badgeProps) {
  const styleMap: Record<string, string> = {
    Approved: 'bg-approved-100 text-white  rounded-full px-4 py-2 w-fit',
    'Pending Manager':
      'bg-pending-100 text-white  rounded-full px-4 py-2 w-fit ',
    'Pending Finance':
      'bg-pending-100 text-white  rounded-full px-4 py-2 w-fit ',
    Badge: 'bg-gray-100 text-gray-800 rounded-full px-4 py-2 w-fit',
  };

  console.log(`Rendering Badge with type: ${type}`);

  return (
    <div className={`${styleMap[type]}`}>
      <div>{type}</div>
    </div>
  );
}

export default Badge;
