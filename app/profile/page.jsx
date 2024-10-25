'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Profile() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <>
                <h1>You are not signed in</h1>
                <Link href="/login">SIGN IN</Link>
            </>
        );
    }

    return (
        <>
            <h1>Welcome, {session.user.name}</h1>
            <p>Email: {session.user.email}</p>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    );
}
