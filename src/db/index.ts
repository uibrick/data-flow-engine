import { MongoClient } from 'mongodb';

const assert = require('assert');

const mongodb_url = 'mongodb://192.168.42.130:27017/dataflow';

export async function connect() {
    let db = await MongoClient.connect(mongodb_url, { useNewUrlParser: true });
    // console.log("Connected successfully to server");
    return db;
}

export async function start() {
    // Use connect method to connect to the server
    let db = await connect();

    db.close();
}

start();
