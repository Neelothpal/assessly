// app/login/page.js
'use client';


import { redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailSignIn = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (result.ok) {
            router.push('/profile');
            redirect('/profile');
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleEmailSignIn}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>

            <hr />
            <button onClick={() => signIn('google')}>Login with Google</button>
            <p>
                Don’t have an account? <a href="/signup">Sign Up</a>
            </p>
        </div>
    );
}
