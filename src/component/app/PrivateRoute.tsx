import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

// https://www.google.com/search?q=react-router-dom+v6+private+route&rlz=1C5CHFA_enKR933KR933&oq=react-router-dom+v6+Private&aqs=chrome.0.0i512j69i57j0i8i30.4164j0j1&sourceid=chrome&ie=UTF-8#kpvalbx=_IXriYp31BsKQ-Aa62rTIBw14
const PrivateRoute = () => {
    const auth = {token: true};
    return (
        auth.token ? <Outlet/> : <Navigate to={"/login"}/>
    )
};

export default PrivateRoute;