import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {

    //TODO: local storage or cookie를 통해 저장한 Token이 유효한지 판별 후 페이지 이동 결정
    const auth = {token: true};

    return (
        auth.token ? <Outlet/> : <Navigate to={"/login"}/>
    )
};

export default PrivateRoute;