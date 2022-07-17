import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";

import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";

const App = () => {
    //TODO: https://velog.io/@soryeongk/ReactRouterDomV6 (react-router-dom version 6에 대한 학습)
    //TODO: 현재 패키지 관리 툴은 yarn, npm 같이 쓰지 않기

    return (
        <Router>
            {/*<Link to={"/"}>Home</Link>*/}
            {/*<Link to={"/login"}>Login</Link>*/}
            {/*<Link to={"/test"}>Test</Link>*/}
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/test"} element={<div/>}/>
            </Routes>
        </Router>
    )
}

export default App
