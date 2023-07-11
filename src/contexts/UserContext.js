import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    // signup
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // signout

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])

    console.log(user)

    const appInfo = {
        user,
        signUp,
        signIn,
        logOut
    };
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;