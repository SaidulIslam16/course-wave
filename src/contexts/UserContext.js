import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

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
    // signout

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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
        updateUserInfo
    };
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;