import React from 'react';
import {Outlet} from "react-router-dom";

const PageLayout = () => {
    return (
        <div style={{background: "red"}}>
            <Outlet/>
        </div>
    )
};

export default PageLayout;