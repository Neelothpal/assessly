'use client';

import { useState } from 'react';

export default function AssignmentDetail({ assignment, onClose }) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleAddComment = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments((prevComments) => [...prevComments, comment]);
            setComment('');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-4">{assignment.title}</h2>
                <p className="mb-4">{assignment.description}</p>
                <h3 className="text-xl font-semibold mb-2">Comments:</h3>
                <div className="mb-4">
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="border p-2 mb-2 rounded">
                                {comment}
                            </div>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </div>
                <form onSubmit={handleAddComment} className="mb-4">
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
                <button onClick={onClose} className="bg-gray-300 text-gray-700 p-2 rounded">
                    Close
                </button>
            </div>
        </div>
    );
}
