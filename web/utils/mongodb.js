import { dbDeployed, dbDeployedString, dbTest, dbTestString, params } from "./site";
// import {MongoClient,ObjectID} from 'mongodb'

export const MongoClient = require('mongodb').MongoClient;
export const ObjectId = require('mongodb').ObjectID;

export async function connectToDatabase() {
    const mongoClient = new MongoClient(params.projectState === 0 ? dbTestString : dbDeployedString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const client = await mongoClient.connect();
    return { 'client': client, 'db': client.db(params.projectState === 0 ? dbTest : dbDeployed) };
}
