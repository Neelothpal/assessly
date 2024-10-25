// app/lib/mongodb.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Ensure this variable is defined in your .env file

if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let client;
let clientPromise;
console.log('clientPromise0000');
// Create a new MongoClient
if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so the MongoClient is not constantly created
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        console.log('client2');
        global._mongoClientPromise = client.connect();
        console.log('clientPromisessss');
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, create a new client each time
    console.log('client');
    client = new MongoClient(uri);
    clientPromise = client.connect();
    console.log('clientPromise');
}

export default clientPromise;
