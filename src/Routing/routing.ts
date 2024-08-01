import express from 'express';
import { getDatabase } from '../MongoDb/database';
import { ObjectId } from 'mongodb';

const userRouting = express.Router();

userRouting.post('/createUser', async (request: express.Request, response: express.Response) => {

    try {
        let database = getDatabase();

        let collection = database.collection('users');

        let body = request.body;

        const data = await collection.insertOne(body)

        response.status(200).json({
            "response": data
        })


    } catch (error) {
        console.log(error)
    }

});

userRouting.get('/getUsers', async (request: express.Request, response: express.Response) => {
    try {
        let database = getDatabase()
        let collection = database.collection('users');
        const get = await collection.find({}).toArray();

        response.status(200).json({
            'response': get
        })

    } catch (error) {

    }
})

userRouting.get('/getUser/:id', async (request: express.Request, response: express.Response) => {
    try {
        let userId = request.params.id;
        let database = getDatabase()
        let collection = database.collection('users');
        const get = await collection.find({"_id" : new ObjectId(userId)}).toArray();

        response.status(200).json({
            'response': get
        })

    } catch (error) {
        console.log(error)

    }
})

export default userRouting;