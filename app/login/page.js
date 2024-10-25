'use client';

import { useState } from 'react';

export default function LoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Implement login logic here
        // For demonstration, let's just set the logged-in state
        setIsLoggedIn(true);
        alert(`Logged in as: ${email}`);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-extrabold text-center">{isLoggedIn ? 'User Info' : 'Login'}</h2>
                {isLoggedIn ? (
                    <div className="mt-6">
                        <p className="text-lg">Welcome, {email}!</p>
                        <button
                            onClick={handleLogout}
                            className="mt-4 w-full bg-red-600 text-white p-2 rounded"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border p-2"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full border p-2"
                        />
                        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
                            Sign In
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
