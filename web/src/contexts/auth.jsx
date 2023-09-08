
import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithCredential } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { firebaseApp } from "../service/firebase";


export const AuthContext = createContext({});

export function AuthProvider(props) {
  const [userState, setUserState] = useState(null);
  const auth = getAuth();

  async function signIn(credential) {

    const validatedCredential = GoogleAuthProvider.credential(credential);

    const response = await signInWithCredential(auth, validatedCredential);

    const user = response.user;

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
      folders: [
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
    });

    setUserState({
      username,
      email,
      avatar_url,
    })
  }

  async function signOut() {
    await auth.signOut();
    setUserState(null);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser)

        const {
          email,
          displayName: username,
          photoURL: avatar_url
        } = authUser;

        console.log(avatar_url)

        setUserState({
          username,
          email,
          avatar_url,
        });

      } else {
        setUserState(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ userState, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}