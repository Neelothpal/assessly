import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl text-center font-semibold mb-6">
                Wellcome to Assessly
            </h1>
            <p className='text-center w-500 text-xl'>
                Assessly is a platform that allows you to create and take assessments and review assignments.
            </p>
            <p className='text-center w-500 text-xl'>
                create your assessments and get reviewed by your peers.
            </p>
            <Link href="/my-assignments" className='bg-slate-900 text-white p-2 rounded-md'> Create New assignments</Link>
            {/* Display Home Page here */}
        </div>
    )
}

export default page