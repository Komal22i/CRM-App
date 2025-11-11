import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

export default function TicketTable({ tickets }) {
  const navigate = useNavigate();

  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true, width: '90px' },
    { name: 'Title', selector: row => row.title, sortable: true },
    { name: 'Customer', selector: row => row.customerName, sortable: true },
    { name: 'Status', selector: row => row.status, sortable: true },
    { name: 'Priority', selector: row => row.priority, sortable: true },
    { name: 'Created', selector: row => new Date(row.createdAt).toLocaleDateString(), sortable: true },
  ];

  return (
    <DataTable
      title="Support Tickets"
      columns={columns}
      data={tickets}
      pagination
      highlightOnHover
      pointerOnHover
      onRowClicked={row => navigate(`/ticket/${row.id}`)}
    />
  );
}
