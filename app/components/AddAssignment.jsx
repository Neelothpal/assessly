'use client';

import { useState } from 'react';

export default function AddAssignment({ onAddAssignment }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the function passed down from the parent to add the assignment
        onAddAssignment({ title, description });
        // Reset the form
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Assignment</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Assignment Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full border p-2 rounded"
                />
            </div>
            <div className="mb-4">
                <textarea
                    placeholder="Assignment Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full border p-2 rounded"
                    rows="4"
                />
            </div>
            <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                Add Assignment
            </button>
        </form>
    );
}
