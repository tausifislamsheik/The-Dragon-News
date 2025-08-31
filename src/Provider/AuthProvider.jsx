import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const createUser = (email, password) =>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
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
        signOutUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;