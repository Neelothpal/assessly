'use client'; // Ensure this component is a client component

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddAssignment = () => {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        // Optionally validate file type/size here
        if (selectedFile) {
            setFile(selectedFile); // Set the first selected file
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        // Add file upload logic here
        try {
            // Example: upload file and assignment data
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('file', file);

            const response = await fetch('/api/assignments', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to submit assignment');
            }

            setSuccessMessage('Assignment submitted successfully!');
            // Optionally reset form fields
            setTitle('');
            setDescription('');
            setFile(null);
            // Redirect to my assignments page or do something else
            setTimeout(() => {
                router.push('/my-assignments'); // Redirect after a short delay
            }, 2000);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-4">Add Assignment</h1>
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    placeholder="Assignment Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 rounded w-full mb-2"
                    required
                />
                <textarea
                    placeholder="Assignment Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border p-2 rounded mb-2"
                    rows="3"
                    required
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="border p-2 rounded w-full mb-2"
                    required
                />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded mt-2">
                    Submit Assignment
                </button>
            </form>
            <button onClick={() => router.back()} className="bg-gray-300 text-gray-700 p-2 rounded">
                Back to My Assignments
            </button>
        </div>
    );
};

export default AddAssignment;
