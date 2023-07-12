import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // signup
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update User information
    const updateUserInfo = (name, photo_URL) => {
        console.log(name, photo_URL);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo_URL
        })
            .then(() => { })
            .catch(error => console.error(error))
    }

    // signIn
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Signin
    const googleSignin = () => {
        return signInWithPopup(auth, provider);
    }

    // signout

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false)
            console.log('user state changed', currentUser);
        })
        return () => unsubscribe();
    }, [])

    console.log(user)

    const appInfo = {
        user,
        signUp,
        signIn,
        logOut,
        updateUserInfo,
        loader,
        googleSignin
    };
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;