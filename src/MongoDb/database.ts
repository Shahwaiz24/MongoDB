import { MongoClient, Db } from "mongodb";


let database: Db;
let url = 'mongodb://127.0.0.1:27017';

export async function connectToDatabase() {

   try {
     const client = new MongoClient(url);
     database = client.db('News_App');
     console.log('DataBase Connected Successfully');
   } catch (e) {
       console.log(e);
    
   }

    
}

export function getDatabase() {
    return database;
}