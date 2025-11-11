import { useState, useEffect } from 'react';

export default function SearchInput({ onSearch }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input);
    }, 300);
    return () => clearTimeout(handler);
  }, [input, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search by title or customer..."
      className="border p-2 rounded w-full mb-3"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}
