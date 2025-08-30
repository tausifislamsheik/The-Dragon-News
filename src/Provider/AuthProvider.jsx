import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
         createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email, password) =>{
        signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        createUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;