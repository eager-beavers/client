import React from "react";
import logo from "../image/logo.png";

const LoginPage = () => {
    return (
        <div className={"overflow-hidden flex justify-center content-center bg-amber-100 h-full"}>
            <img className={"max-w-none h-[65rem] w-[100rem] mb-[30rem] -translate-y-32"} src={logo}
                 alt={"logo"}/>
            {/*<div className={"text-3xl font-bold underline"}>LoginPage</div>*/}
        </div>
    )
}
export default LoginPage;