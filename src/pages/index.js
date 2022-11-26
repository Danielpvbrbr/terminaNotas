import React, { useState, useContext } from "react";
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
    var width = window.screen.width;

    const RotaActive = () => {
        // eslint-disable-next-line default-case
        switch (route) {
            case '/Home':
                return <Home
                    setDataRouter={setDataRouter}
                    setRoute={setRoute}
                    width={width}
                    AuthContext={AuthContext}
                    setActive={setActive}
                />
            case '/Sweepstakes':
                return <Sweepstakes
                    width={width}
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
                    AuthContext={AuthContext}
                />
            case '/ContactUs':
                return <ContactUs
                    width={width}
                    AuthContext={AuthContext}
                />
            case '/Sales':
                return <Sales
                    width={width}
                    AuthContext={AuthContext}
                />
            case '/UserList':
                return <UserList
                    width={width}
                    AuthContext={AuthContext}
                />
            case '/MyAccount':
                return <MyAccount
                    setRoute={setRoute}
                    width={width}
                    signed={signed}
                    setIsForm={setIsSignIn}
                    AuthContext={AuthContext}
                />
            case '/Doubt':
                return <Doubt
                    width={width}
                    AuthContext={AuthContext}
                />
            case '/ViewProduct':
                return <ViewProduct
                    dataRouter={dataRouter}
                    width={width}
                    AuthContext={AuthContext}
                />
            case '/MyShopping':
                return <MyShopping
                    setRoute={setRoute}
                    width={width}
                    AuthContext={AuthContext}
                />
            case '/MyData':
                return <MyData
                    setRoute={setRoute}
                    width={width}
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
                    setIsSignUp={setIsSignUp}
                    AuthContext={AuthContext}
                />
            }
            {isSignUp &&
                <SignUp
                    setIsForm={setIsSignIn}
                    width={width}
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
                    width={width < 500 ? 60 : 42}
                    AuthContext={AuthContext}
                    setActive={setActive}
                />
            }
            {confirmPurchases &&
                <ConfirmPurchase
                    width={width}
                    AuthContext={AuthContext}
                />
            }
            <AreaMenu />
            <AreaInfo>
                {width > 500 &&
                    <AreaWinners />
                }
                <AreaBody width={width < 500 ? 95 : 42}>
                    <MenuMax
                        width={width}
                        signed={signed}
                        isMenu={isMenu}
                        setRoute={setRoute}
                        route={route}
                        setIsMenu={setIsMenu}
                        AuthContext={AuthContext}
                        setDataRouter={setDataRouter}
                        setActive={setActive}
                    />
                    <Info>
                        {RotaActive()}
                    </Info>
                </AreaBody>

                {width > 500 &&
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