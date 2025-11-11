import React, { createContext, useContext, useState, useEffect } from 'react';
import { dummyData } from '../data/dummyData';

const TicketContext = createContext();
export const useTickets = () => useContext(TicketContext);

export const TicketProvider = ({ children }) => {

  const [tickets, setTickets] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('tickets'));
      if (!Array.isArray(saved) || saved.length < dummyData.length) {
        localStorage.setItem('tickets', JSON.stringify(dummyData));
        return dummyData;
      }
      return saved;
    } catch {
      return dummyData;
    }
  });

  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

 const addTicket = (ticket) => {
  setTickets((prev) => {
    const nextId = prev.length ? Math.max(...prev.map(t => t.id)) + 1 : 1;
    const newTicket = {
      ...ticket,
      id: nextId,
      status: 'Open',
      createdAt: new Date().toISOString(),
      comments: []
    };
    return [...prev, newTicket];
  });
};


  const updateTicket = (id, updates) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  const addComment = (id, comment) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, comments: [...t.comments, comment] } : t
      )
    );
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket, updateTicket, addComment }}>
      {children}
    </TicketContext.Provider>
  );
};
