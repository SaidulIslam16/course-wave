import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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
        return signInWithPopup(auth, googleProvider);
    }

    // Github Signin
    const githubSignin = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // password reset
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
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
        googleSignin,
        githubSignin,
        passwordReset
    };
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;