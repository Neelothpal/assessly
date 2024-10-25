// app/signup/page.js
'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            // Sign in the user automatically after signup
            await signIn('credentials', { email, password, redirect: true });
            router.push('/profile');
        } else {
            alert('Signup failed. Try a different email or check the requirements.');
        }
    };

    return (
        <div className='flex flex-col p-8 w-[100%] h-[100%] justify-center items-center'>
            <h1 className='text-center'>Sign Up</h1>
            <br />
            <form onSubmit={handleSignUp}>
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
                <button type="submit">Sign Up</button>
            </form>

            <p>
                Already have an account? <a href="/login">Log In</a>
            </p>
        </div>
    );
}
