import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
         return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
        })
        return () =>{
            unSubscriber();
        }
    },[])

    const authInfo = {
        createUser,
        loginUser,
        user,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;