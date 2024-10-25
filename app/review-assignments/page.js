'use client';

import Assignment from '@/app/components/Assignment';
import Link from 'next/link';

const reviewAssignments = [
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

export default function ReviewAssignments() {
    return (
        <>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-semibold mb-6">Review Assignments</h1>
                <div>
                    {reviewAssignments.map((assignment) => (
                        <Link key={assignment.id} href={`/review-assignments/${assignment.id}`}>
                            <Assignment title={assignment.title} description={assignment.description} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
