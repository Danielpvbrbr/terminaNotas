import React from "react";
import AuthProvider from './contexts/auth';
import Routes from '../src/pages/';

const App = () => {
    return (
        <AuthProvider>
            <Routes  />
        </AuthProvider>
    )
};

export default App;