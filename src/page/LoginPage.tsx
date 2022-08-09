import React, {useState} from "react";
import logo from "../image/logo.png";
import {Button, Input} from "antd";

const LoginPage = () => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        console.log(id)
        console.log(password)

        try {

        } catch (e) {

        }
    }

    return (
        <div className={"overflow-hidden flex justify-center content-center bg-amber-100 h-full"}>
            <img className={"max-w-none h-[65rem] w-[100rem] mb-[30rem] -translate-y-32 "} src={logo}
                 alt={"logo"}/>
            <div className={"top-[30%] absolute w-1/4 bg-amber-50 p-12 rounded-md shadow-md"}>
                <div className={"mb-8"}>
                    <label>ID</label>
                    <Input type="text" placeholder={"ID"} onChange={e => setId(e.target.value)}/>
                </div>
                <div className={"mb-8"}>
                    <label>Password</label>
                    <Input type="password" placeholder={"Password"} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <Button className={"w-full outline-0 bg-yellow-700 text-white"}
                            onClick={signIn}>Login</Button>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;