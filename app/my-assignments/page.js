'use client'; // Ensure this component is a client component

import Link from 'next/link';

const MyAssignments = () => {
    // Sample assignments data; replace with actual data fetching logic
    const assignments = [
        {
            id: '1',
            title: 'Assignment 1',
            description: 'Description for Assignment 1',
        },
        {
            id: '2',
            title: 'Assignment 2',
            description: 'Description for Assignment 2',
        },
    ];

    return (
        <>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-semibold mb-6">My Assignments</h1>
                <Link href="/my-assignments/add-assignment" className="bg-blue-600 text-white p-2 rounded mb-4 inline-block">
                    Add New Assignment
                </Link>
                <div>
                    {assignments.map((assignment) => (
                        <div key={assignment.id} className="border p-4 mb-4 rounded">
                            <h2 className="font-semibold">{assignment.title}</h2>
                            <p>{assignment.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyAssignments;
