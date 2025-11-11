import React, { useState } from 'react';
import { useTickets } from '../context/TicketContext';
import TicketTable from '../components/TicketTable';
import SearchBar from '../components/SearchInput';
import { Link } from 'react-router-dom';

export default function TicketList() {
  const { tickets } = useTickets();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Date'); 

  const filtered = tickets.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.customerName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || t.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'Priority') {
      const order = { High: 3, Medium: 2, Low: 1 };
      return order[b.priority] - order[a.priority];
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Tickets</h1>
        <Link to="/new" className="bg-blue-600 text-white px-4 py-2 rounded">
          + New Ticket
        </Link>
      </div>

      <SearchBar onSearch={setSearch} />

      <div className="flex flex-wrap gap-4 mb-3 items-center justify-between pt-3">
        <div>
          <label className="mr-2 font-medium">Filter by Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option>All</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </div>

        
        <div>
          <label className="mr-2 font-medium">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border p-2 rounded"
          >
            <option>Date</option>
            <option>Priority</option>
          </select>
        </div>
      </div>

      <TicketTable tickets={sorted} />
    </div>
  );
}
