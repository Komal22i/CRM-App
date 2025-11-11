import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTickets } from "../context/TicketContext";

export default function TicketDetail() {
  const { id } = useParams();
  const { tickets, updateTicket, addComment } = useTickets();
  const ticket = tickets.find((t) => t.id === Number(id));
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  if (!ticket) return <p>Ticket not found.</p>;

  const handleAddComment = () => {
    if (comment.trim()) {
      addComment(ticket.id, { user: "Support", text: comment });
      setComment("");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4  text-blue-600 border rounded-md border-blue-600 py-1 px-3"
      >
        ← Back
      </button>
      <h1 className="text-2xl font-bold mb-2">{ticket.title}</h1>
      <p>
        <strong>Customer:</strong> {ticket.customerName} ({ticket.email})
      </p>
      <p className="py-2">
        <strong>Status:</strong>
        <select
          value={ticket.status}
          onChange={(e) => updateTicket(ticket.id, { status: e.target.value })}
          className="ml-2 border rounded p-1"
        >
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
      </p>
      <p className="py-2">
        <strong>Priority:</strong> {ticket.priority}
      </p>
      <p className="mt-4"> <strong>Description:</strong> {ticket.description}</p>

      <h3 className="mt-6 font-semibold">Comments:</h3>
      <ul className="list-disc pl-5">
        {ticket.comments.map((c, i) => (
          <li key={i}>
            <strong>{c.user}:</strong> {c.text}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-2">
        <input
          className="border p-2 rounded w-full"
          placeholder="Add comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
