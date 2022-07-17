import React from "react";
import logo from "../image/logo.png";
import {Button, Input} from "antd";

const LoginPage = () => {
    return (
        <div className={"overflow-hidden flex justify-center content-center bg-amber-100 h-full"}>
            <img className={"max-w-none h-[65rem] w-[100rem] mb-[30rem] -translate-y-32 "} src={logo}
                 alt={"logo"}/>

            <div className={"top-[30%] absolute w-1/4 bg-amber-50 p-12 rounded-md shadow-md"}>
                <div className={"mb-8"}>
                    <label>ID</label>
                    <Input type="text" placeholder={"ID"}/>
                </div>
                <div className={"mb-8"}>
                    <label>Password</label>
                    <Input type="password" placeholder={"Password"}/>
                </div>
                <div>
                    <Button className={"w-full outline-0 bg-yellow-700 text-white"}>Login</Button>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;