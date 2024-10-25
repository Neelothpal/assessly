'use client';

import { useEffect, useState } from 'react';

export default function Modal({ isOpen, onClose, onAddAssignment }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddAssignment({ title, description });
        setTitle('');
        setDescription('');
        onClose();
    };

    // Close modal when user presses escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-4">Add Assignment</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Assignment Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full border p-2 rounded mb-4"
                    />
                    <textarea
                        placeholder="Assignment Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full border p-2 rounded mb-4"
                        rows="4"
                    />
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white p-2 rounded"
                        >
                            Add Assignment
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-700 p-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
