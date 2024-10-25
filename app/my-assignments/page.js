'use client';

import { useState } from 'react';
import Assignment from '@/app/components/Assignment';
import Modal from '@/app/components/Modal';

export default function MyAssignments() {
    const [assignments, setAssignments] = useState([
        {
            id: 1,
            title: 'Assignment 1',
            description: 'Complete the following exercises in your textbook.',
        },
        {
            id: 2,
            title: 'Assignment 2',
            description: 'Write a report on the effects of climate change.',
        },
        {
            id: 3,
            title: 'Assignment 3',
            description: 'Create a presentation about your favorite book.',
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const addAssignment = (newAssignment) => {
        setAssignments((prevAssignments) => [
            ...prevAssignments,
            { id: prevAssignments.length + 1, ...newAssignment },
        ]);
    };

    return (
        <>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-semibold mb-6">My Assignments</h1>
                <div className='flex justify-evenly'>
                    {assignments.map((assignment) => (
                        <Assignment
                            key={assignment.id}
                            title={assignment.title}
                            description={assignment.description}
                        />
                    ))}
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-600 text-white p-2 rounded mb-4"
                >
                    Add Assignment
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddAssignment={addAssignment} />
        </>
    );
}
