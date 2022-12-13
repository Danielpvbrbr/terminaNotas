import React, { createContext, useState, useEffect } from 'react';

import userAuth from './hooks/userAuth';
import Sweepstakes from './hooks/Sweepstakes';
import api from '../services/api';
import socket from '../services/socket';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [storage, setStorage] = useState({});

    useEffect(() => {
        async function loadingStorage() {
            const myToken = await localStorage.getItem('token');
            const myId = await localStorage.getItem('id');
            api.defaults.headers.common['x-access-token'] = JSON.parse(myToken);

            const config = {
                headers: {
                    "x-access-token": JSON.parse(myToken),
                    "Access-Control-Allow-Origin ": '*',
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            };
            setStorage({
                myToken: JSON.parse(myToken),
                myId: myId,
                config: config
            });
        }
        loadingStorage()
    }, []);

    const {
        auth,
        authenticated,
        signIn,
        signUp,
        signOut,
        isSignIn,
        setIsSignIn,
        isSignUp,
        setIsSignUp,
        recoverPass,
        data_Codig,
        checking,
        msgErr,
        setMsgErr,
        fullUser,
        updUsersAddres,
        myId,
        setAuth,
        setAuthenticated
    } = userAuth({ storage, socket });

    const {
        addSweepstakes,
        sweepstakes,
        purchases,
        sendPurchases,
        purchasesFilter,
        seachPurchases,
        confirmPurchases,
        setConfirmPurchases,
        qrCode,
        res_purchases,
        addWinners,
        filterWinner
    } = Sweepstakes({
        storage,
        socket,
        auth,
        authenticated,
        myId,
        setAuth,
        setAuthenticated
    });

    return (
        <AuthContext.Provider value={{
            signed: authenticated,
            auth,
            signIn,
            signUp,
            signOut,
            isSignIn,
            setIsSignIn,
            isSignUp,
            setIsSignUp,
            addSweepstakes,
            sweepstakes,
            sendPurchases,
            purchases,
            purchasesFilter,
            seachPurchases,
            confirmPurchases,
            setConfirmPurchases,
            qrCode,
            res_purchases,
            recoverPass,
            data_Codig,
            checking,
            msgErr,
            setMsgErr,
            fullUser,
            updUsersAddres,
            addWinners,
            filterWinner
        }}>
            {children}

        </AuthContext.Provider>
    );
}
