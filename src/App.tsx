import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";

import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import {PageLayout} from "./component/common";

//https://devalice.tistory.com/112
const App = () => {
    //TODO: https://velog.io/@soryeongk/ReactRouterDomV6 (react-router-dom version 6에 대한 학습)
    //TODO: 현재 패키지 관리 툴은 yarn, npm 같이 쓰지 않기

    return (
        <Router>
            {/*<Link to={"/"}>Home</Link>*/}
            {/*<Link to={"/login"}>Login</Link>*/}
            {/*<Link to={"/test"}>Test</Link>*/}
            <Routes>
                <Route path={"/"} element={<PageLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"/test"} element={<HomePage/>}/>
                </Route>

                {/*TODO: Local storage에 로그인 정보를 담은 Token이 없으면 Login Page로 이동하도록 Route를 작성해야함*/}
                <Route path={"/login"} element={<LoginPage/>}/>
            </Routes>
        </Router>
    )
}

export default App
