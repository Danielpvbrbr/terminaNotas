import React, { useState, useContext, useEffect } from "react";
import {
    Container,
    AreaMenu,
    AreaInfo,
    AreaBody,
    Info,
} from "./styles";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ConfirmPurchase from '../components/ConfirmPurchase';
import { AuthContext } from '../contexts/auth';
import AreaWinners from '../components/AreaWinners';
import AreaDoubt from '../components/AreaDoubt';
import MenuMin from '../components/MenuMin';
import MenuMax from '../components/MenuMax';
import Home from './Home';
import Sweepstakes from './Sweepstakes';
import Winners from './Winners';
import ContactUs from './ContactUs';
import Sales from './Sales';
import UserList from './UserList';
import MyAccount from './MyAccount';

import Doubt from './Doubt';
import ViewProduct from '../subpages/ViewProduct';
import MyShopping from '../subpages/MyShopping';
import MyData from '../subpages/MyData';

export default function App() {
    window.onresize = start;
    var width_ = window.screen.width;
    const {
        signed,
        isSignIn,
        setIsSignIn,
        isSignUp,
        setIsSignUp,
        confirmPurchases,
    } = useContext(AuthContext);
    const [route, setRoute] = useState('/Home');
    const [active, setActive] = useState('Active'); //Sweepstakes
    const [isMenu, setIsMenu] = useState(false);
    const [dataRouter, setDataRouter] = useState([]);
    const [width, setWidth] = useState('' || width_);
    const widthMax = 701;

    function start() {
        setWidth(document.documentElement.clientWidth);
    };

    const RotaActive = () => {
        // eslint-disable-next-line default-case
        switch (route) {
            case '/Home':
                return <Home
                    setDataRouter={setDataRouter}
                    setRoute={setRoute}
                    width={width}
                    widthMax={widthMax}
                    AuthContext={AuthContext}
                    setActive={setActive}
                />
            case '/Sweepstakes':
                return <Sweepstakes
                    width={width}
                    widthMax={widthMax}
                    AuthContext={AuthContext}
                    setRoute={setRoute}
                    active={active}
                    setActive={setActive}
                    dataRouter={dataRouter}
                    setDataRouter={setDataRouter}
                />
            case '/Winners':
                return <Winners
                    width={width}
                    widthMax={widthMax}
                    AuthContext={AuthContext}
                />
            case '/ContactUs':
                return <ContactUs
                    width={width}
                    widthMax={widthMax}
                    AuthContext={AuthContext}
                />
            case '/Sales':
                return <Sales
                    width={width}
                    widthMax={widthMax}
                    AuthContext={AuthContext}
                />
            case '/UserList':
                return <UserList
                    width={width}
                    widthMax={widthMax}
                    AuthContext={AuthContext}
                />
            case '/MyAccount':
                return <MyAccount
                    setRoute={setRoute}
                    width={width}
                    widthMax={widthMax}
                    signed={signed}
                    setIsForm={setIsSignIn}
                    AuthContext={AuthContext}
                />
            case '/Doubt':
                return <Doubt
                    width={width}
                    widthMax={widthMax}
                    AuthContext={AuthContext}
                />
            case '/ViewProduct':
                return <ViewProduct
                    dataRouter={dataRouter}
                    width={width}
                    widthMax={widthMax}
                    AuthContext={AuthContext}
                />
            case '/MyShopping':
                return <MyShopping
                    setRoute={setRoute}
                    width={width}
                    widthMax={widthMax}
                    AuthContext={AuthContext}
                />
            case '/MyData':
                return <MyData
                    setRoute={setRoute}
                    width={width}
                    widthMax={widthMax}
                    AuthContext={AuthContext}
                />
        }
    };

    return (
        <Container>
            {isSignIn &&
                <SignIn
                    setIsForm={setIsSignIn}
                    width={width}
                    widthMax={widthMax}
                    setIsSignUp={setIsSignUp}
                    AuthContext={AuthContext}
                />
            }
            {isSignUp &&
                <SignUp
                    setIsForm={setIsSignIn}
                    width={width}
                    widthMax={widthMax}
                    setIsSignUp={setIsSignUp}
                    AuthContext={AuthContext}
                />
            }
            {isMenu &&
                <MenuMin
                    setIsForm={setIsSignIn}
                    setIsMenu={setIsMenu}
                    setRoute={setRoute}
                    setDataRouter={setDataRouter}
                    route={route}
                    signed={signed}
                    width={width < widthMax ? 60 : 42}
                    widthMax={widthMax}
                    AuthContext={AuthContext}
                    setActive={setActive}
                />
            }
            {confirmPurchases &&
                <ConfirmPurchase
                    width={width}
                    widthMax={widthMax}
                    AuthContext={AuthContext}
                />
            }
            <AreaMenu  width={width < widthMax ? '100vw' : '100vw'}/>
            <AreaInfo>
                {width > 950 &&
                    <AreaWinners />
                }
                <AreaBody width={width < widthMax ? '92vw' : '570px'}>
                    <MenuMax
                        width={width}
                        widthMax={widthMax}
                        signed={signed}
                        isMenu={isMenu}
                        setRoute={setRoute}
                        route={route}
                        setIsMenu={setIsMenu}
                        AuthContext={AuthContext}
                        setDataRouter={setDataRouter}
                        setActive={setActive}
                        setIsForm={setIsSignIn}
                    />
                    <Info>
                        {RotaActive()}
                    </Info>
                </AreaBody>

                {width > 950 &&
                    <AreaDoubt
                        setIsForm={setIsSignIn}
                        signed={signed}
                        AuthContext={AuthContext}
                    />
                }
            </AreaInfo>
        </Container>
    )
};