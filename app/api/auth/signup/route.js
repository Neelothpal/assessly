// app/api/auth/signup/route.js
import { hash } from 'bcryptjs';
import clientPromise from '@/app/lib/mongodb';

export async function POST(req) {
    const { email, password } = await req.json();

    if (!email || !password) {
        return new Response('Email and password required', { status: 400 });
    }

    const client = await clientPromise;

    const db = client.db();
    // Check if the user already exists
    const existingUser = await db.collection('users').findOne({ email });
    console.log(existingUser);
    if (existingUser) {
        return new Response('User already exists', { status: 400 });
    }
    console.log('client');

    // Hash the password before storing it
    const hashedPassword = await hash(password, 12);
    const newUser = await db.collection('users').insertOne({
        email,
        password: hashedPassword,
        createdAt: new Date(),
    });

    console.log(newUser);
    return new Response({ status: 200 });
}
