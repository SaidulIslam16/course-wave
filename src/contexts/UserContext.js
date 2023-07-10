import React, { createContext } from 'react';

export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const user = { displayName: 'Saidul Islam' }

    const appInfo = { user };
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;