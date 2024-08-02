import express from "express"
import { Db } from "mongodb"
import { getDatabase } from "../config/database"

export class User_controller {



    static async signup(request: express.Request, response: express.Response) {
        let db: Db = getDatabase();

        let userCollection = db.collection("users");

        
    }
}