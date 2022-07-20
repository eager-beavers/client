import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";

import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import {PageLayout} from "./component/common";

import TestPage1 from "./page/TestPage1";
import TestPage2 from "./page/TestPage2";
import TestPage3 from "./page/TestPage3";

//https://devalice.tistory.com/112
const App = () => {
    //TODO: https://velog.io/@soryeongk/ReactRouterDomV6 (react-router-dom version 6에 대한 학습)
    //TODO: 현재 패키지 관리 툴은 yarn, npm 같이 쓰지 않기

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<PageLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"/test1"} element={<TestPage1/>}/>
                    <Route path={"/test2"} element={<TestPage2/>}/>
                    <Route path={"/test3"} element={<TestPage3/>}/>
                </Route>

                {/*TODO: Local storage에 로그인 정보를 담은 Token이 없으면 Login Page로 이동하도록 Route를 작성해야함*/}
                <Route path={"/login"} element={<LoginPage/>}/>
            </Routes>
        </Router>
    )
}

export default App
