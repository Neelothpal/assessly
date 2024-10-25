'use client'; // Ensure this component is a client component

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const UserInfoPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <div>Loading...</div>; // Optionally, show a loading indicator
    }

    if (!session) {
        router.push('/login'); // Redirect to login if not authenticated
        return null; // Prevent rendering until redirect
    }

    return (
        <>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-semibold mb-6">User Info</h1>
                <p>Welcome, {session.user.name}!</p>
                <button onClick={() => signOut()} className="bg-red-600 text-white p-2 rounded mt-4">
                    Logout
                </button>
            </div>
        </>
    );
};

export default UserInfoPage;
