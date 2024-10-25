'use client'; // Ensure this component is a client component

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AssignmentDetail = ({ params }) => {
    const router = useRouter();
    const { id } = params;

    // Sample data, replace this with actual data fetching logic
    const assignmentData = [
        {
            id: '1',
            title: 'Review Assignment 1',
            description: 'Review the project submission by Student A and provide feedback.',
        },
        {
            id: '2',
            title: 'Review Assignment 2',
            description: 'Evaluate the essay written by Student B for clarity and content.',
        },
        {
            id: '3',
            title: 'Review Assignment 3',
            description: 'Assess the presentation by Student C and suggest improvements.',
        },
    ];

    const assignment = assignmentData.find((a) => a.id === id);

    const [comment, setComment] = useState('');
    const [username, setUsername] = useState(''); // New state for username
    const [comments, setComments] = useState([]);

    const handleAddComment = (e) => {
        e.preventDefault();
        if (comment.trim() && username.trim()) {
            setComments((prevComments) => [
                ...prevComments,
                { text: comment, user: username }, // Store both comment and username
            ]);
            setComment('');
            setUsername(''); // Clear the username after submitting
        }
    };

    return (
        <>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-semibold mb-4">{assignment.title}</h1>
                <p className="mb-4">{assignment.description}</p>

                <h2 className="text-xl font-semibold mb-2">Comments:</h2>
                <div className="mb-4">
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="border p-2 mb-2 rounded">
                                <strong>{comment.user}:</strong> {comment.text} {/* Display username */}
                            </div>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </div>

                <form onSubmit={handleAddComment} className="mb-4">
                    <input
                        type="text"
                        placeholder="Your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border p-2 rounded w-full mb-2"
                    />
                    <textarea
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full border p-2 rounded"
                        rows="3"
                    />
                    <button type="submit" className="bg-blue-600 text-white p-2 rounded mt-2">
                        Submit Comment
                    </button>
                </form>
                <button onClick={() => router.back()} className="bg-gray-300 text-gray-700 p-2 rounded">
                    Back to Assignments
                </button>
            </div>
        </>
    );
};

export default AssignmentDetail;
