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
                    <Route path={"/home"} element={<HomePage/>}/>
                    <Route path={"/test"} element={<HomePage/>}/>
                </Route>
                <Route path={"/login"} element={<LoginPage/>}/>
            </Routes>
        </Router>
    )
}

export default App
