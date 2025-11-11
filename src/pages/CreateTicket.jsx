import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTickets } from "../context/TicketContext";

export default function CreateTicket() {
  const { addTicket } = useTickets();
  const [form, setForm] = useState({
    customerName: "",
    email: "",
    title: "",
    description: "",
    priority: "Low",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.customerName || !form.email || !form.title || !form.description)
      return alert("All fields required");
    if (!/\S+@\S+\.\S+/.test(form.email)) return alert("Invalid email");
    addTicket(form);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto flex-col">
      <h1 className="text-2xl font-bold mb-4">Create New Ticket</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="customerName"
          placeholder="Customer Name"
          value={form.customerName}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Ticket
        </button>
      </form>
    </div>
  );
}
