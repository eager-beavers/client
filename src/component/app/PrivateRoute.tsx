import React from 'react';
import {isNil} from 'lodash';
import {Navigate, Outlet} from "react-router-dom";
import {getLocalStorage} from "../../util/Storage";

const PrivateRoute = () => {

    //TODO: local storage or cookie를 통해 저장한 Token이 유효한지 판별 후 페이지 이동 결정
    const auth = getLocalStorage("TEST_AUTH_KEY") === "true";

    return (
        !isNil(auth) && auth ? <Outlet/> : <Navigate to={"/login"}/>
    )
};

export default PrivateRoute;