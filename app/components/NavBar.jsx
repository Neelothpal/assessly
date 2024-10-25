'use client';

import Link from 'next/link';
import Image from 'next/image';
import assessly from '@/public/assessly.svg';

export default function NavBar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <span className="text-2xl font-bold">
                        <Image
                            src={assessly}
                            width={150}
                            height={50}
                            alt="icon"
                        />
                    </span>
                </Link>
                <div className="space-x-4">
                    <Link href="/my-assignments">
                        <span className="hover:underline">My Assignments</span>
                    </Link>
                    <Link href="/review-assignments">
                        <span className="hover:underline">Review Assignments</span>
                    </Link>
                    <Link href="/login">
                        <span className="hover:underline">Login</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
