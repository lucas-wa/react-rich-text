import {firebaseApp} from "./firebase.js"

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from  "firebase/auth"
import express from "express"
import cors from "cors"


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Olá")
});

app.post("/createUser", async (req, res) => {

    const {email, password} = req.body;

    try {
        const auth = await getAuth();
        const userCredential  = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        res.send("User created");
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        res.send({"error": errorCode + ": " +errorMessage});
    }

});

app.post("/sign", async (req, res) => {

    const {email, password} = req.body;

    try {
        const auth = await getAuth();
        const userCredential  = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        res.send("User signed");
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        res.send({"error": errorCode + ": " +errorMessage});
    }

});

app.listen("8080", () => {
    console.log("Server is running!")
});