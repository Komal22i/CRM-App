import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TicketProvider } from './context/TicketContext';
import TicketList from './pages/TicketList';
import TicketDetail from './pages/TicketDetail';
import CreateTicket from './pages/CreateTicket';

export default function App() {
  return (
    <TicketProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TicketList />} />
          <Route path="/ticket/:id" element={<TicketDetail />} />
          <Route path="/new" element={<CreateTicket />} />
        </Routes>
      </Router>
    </TicketProvider>
  );
}
