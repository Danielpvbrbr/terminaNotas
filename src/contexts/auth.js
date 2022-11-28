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
        setMsgErr
    } = userAuth({ storage, socket });

    const {
        sendImg,
        sweepstakes,
        purchases,
        sendPurchases,
        purchasesFilter,
        confirmPurchases,
        setConfirmPurchases,
        qrCode,
        res_purchases
    } = Sweepstakes({ storage, socket, auth });

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
            sendImg,
            sweepstakes,
            sendPurchases,
            purchases,
            purchasesFilter,
            confirmPurchases,
            setConfirmPurchases,
            qrCode,
            res_purchases,
            recoverPass,
            data_Codig,
            checking,
            msgErr,
            setMsgErr
        }}>
            {children}

        </AuthContext.Provider>
    );
}
