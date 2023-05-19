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
            avatar_url
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



    // try {
    //     // console.log({ verified: verifyGoogleToken(req.body.credential) });
    //     if (req.body.credential) {
    //         const verificationResponse = await verifyGoogleToken(req.body.credential);

    //         if (verificationResponse.error) {
    //             return res.status(400).json({
    //                 message: verificationResponse.error,
    //             });
    //         }



    //         const profile = verificationResponse.payload;
    //         const token = jwt.sign({ email: profile.email }, JWT_SECRET, {
    //             expiresIn: "1d",
    //         });

    //         res.status(201).json({
    //             message: "Signup was successful",
    //             user: {
    //                 firstName: profile.given_name,
    //                 lastName: profile.family_name,
    //                 picture: profile.picture,
    //                 email: profile.email,
    //                 token
    //             },
    //         });
    //     }
    // } catch (error) {
    //     console.log(error)
    //     res.status(500).json({
    //         message: "An error occurred. Registration failed.",
    //     });
    // }



});

app.listen("8080", () => {
    console.log("Server is running!")
});




// async function verifyGoogleToken(token) {
//     try {
//         const ticket = await client.verifyIdToken({
//             idToken: token,
//             audience: GOOGLE_CLIENT_ID,
//         });
//         return { payload: ticket.getPayload() };
//     } catch (error) {
//         return { error: "Invalid user detected. Please try again" };
//     }
// }

