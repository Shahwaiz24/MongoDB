import express from 'express';
import { getDatabase } from '../config/database';
import { ObjectId } from 'mongodb';
import { User_controller } from '../controller/user_controller';

const userRouting = express.Router();

userRouting.post('/signup', User_controller.signup);

// userRouting.post('/createUser', async (request: express.Request, response: express.Response) => {

//     try {
//         let database = getDatabase();

//         let collection = database.collection('users');

//         let body = request.body;

//         const data = await collection.insertOne(body)

//         response.status(200).json({
//             "response": data
//         })


//     } catch (error) {
//         console.log(error)
//     }

// });

// userRouting.get('/getUsers', async (request: express.Request, response: express.Response) => {
//     try {
//         let database = getDatabase()
//         let collection = database.collection('users');
//         const get = await collection.find({}).toArray();

//         response.status(200).json({
//             'response': get
//         })

//     } catch (error) {

//     }
// })

// userRouting.get('/getsingleuser/:id', async (request: express.Request, response: express.Response) => {
//     try {
//         let userId = request.params.id;
//         let database = getDatabase()
//         let collection = database.collection('users');
//         const get = await collection.find({ "_id": new ObjectId(userId) }).toArray();

//         response.status(200).json({
//             'response': get
//         })

//     } catch (error) {
//         console.log(error)

//     }
// })


// userRouting.put('/updateuser', async (request: express.Request, response: express.Response) => {
//     try {
//         let body = request.body;
//         let database = getDatabase()
//         let collection = database.collection('users');
//         let userinfo = {
//             "name": body.name,

//             "email": body.email
//         }
//         const update = await collection.updateOne({ "_id": new ObjectId(body.userId) }, { '$set': userinfo });

//         response.status(200).json({
//             'response': update
//         })

//     } catch (error) {
//         console.log(error)

//     }
// })



// userRouting.delete('/deleteuser/:id', async (request: express.Request, response: express.Response) => {
//     try {
//         let userId = request.params.id;
//         let database = getDatabase()
//         let collection = database.collection('users');

//         const deleted = await collection.deleteOne({ "_id": new ObjectId(userId) });

//         response.status(200).json({
//             'response': deleted
//         })

//     } catch (error) {
//         console.log(error)

//     }
// })


export default userRouting;