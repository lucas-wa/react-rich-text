import { firebaseApp } from "./firebase.js"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithCredential
} from "firebase/auth"

import { getDatabase, set, ref } from "firebase/database"

import { OAuth2Client } from "google-auth-library"
import cookieParser from 'cookie-parser'
import jwt from "jsonwebtoken"



import express from "express"
import cors from "cors"


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const JWT_SECRET = process.env.JWT_SECRET;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

app.get("/", (req, res) => {
    res.send("Olá")
});

app.get("/dashboard", verifyToken, (req, res) => {

})

app.post("/createUser", async (req, res) => {

    const { username, email, password } = req.body;

    try {
        console.log(username, email, password);
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        res.status(201).json({
            user
        });

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        res.send({ "error": errorCode + ": " + errorMessage });
    }

});

app.post("/sign", async (req, res) => {

    const { login, password } = req.body;

    try {
        console.log(login, password);
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, login, password);
        const user = userCredential.user;
        res.status(201).json({
            user
        });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        res.status(200).send({ "error": errorCode + ": " + errorMessage });
    }

});

app.post("/googleSign", async (req, res) => {

    try {
        const auth = getAuth();
        const credential = GoogleAuthProvider.credential(req.body.credential);

        const response = await signInWithCredential(auth, credential);

        const user = response.user;

        const {
            accessToken,
            refreshToken } = user.stsTokenManager;

        const {
            email,
            displayName: username,
            photoUrl: avatar_url
        } = user.reloadUserInfo

        const uid = user.uid;


        const database = getDatabase();

        await set(ref(database, 'users/' + uid), {
            username,
            email,
            avatar_url,
            folders:  [
                {
                    name: "Folder",
                    files: [
                        {
                            title: "Untitle",
                            cells: [
                                {
                                    type: "text",
                                    color: "inherint",
                                    background: "inherint",
                                    language: "JavaScript"
                                }
                            ]
                        }
                    ]                             
                }
            ]
        })


        res.cookie('accessToken', accessToken, { httpOnly: true, secure: true });
        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true });




        res.status(200).json({
            accessToken,
            refreshToken,
            username,
            email,
            avatar_url
        });


    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }

});

app.listen("8080", () => {
    console.log("Server is running!")
});


async function verifyToken (req, res, next)  {
    try {
        const idToken = req.headers.authorization.split(' ')[1];
        const decodedToken = await auth().verifyIdToken(idToken);

        // Check if the token has expired
        const nowInSeconds = Math.floor(Date.now() / 1000);
        if (decodedToken.exp < nowInSeconds) {
            throw new Error('Token has expired');
        }
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
}
