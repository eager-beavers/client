import {useState} from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import './App.css'
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";

const App = () => {
    const [count, setCount] = useState(0)

    //TODO: https://velog.io/@soryeongk/ReactRouterDomV6 (react-router-dom version 6에 대한 학습)
    //TODO: 현재 패키지 관리 툴은 yarn 가능하면 npm과 같이 쓰지 않기

    return (
        <Router>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/test"}>Test</Link>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/test"} element={<div/>}/>
            </Routes>
        </Router>

        // <div className="App">
        //     Test
        // </div>
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>Hello Vite + React!</p>
        //     <p>
        //       <button type="button" onClick={() => setCount((count) => count + 1)}>
        //         count is: {count}
        //       </button>
        //     </p>
        //     <p>
        //       Edit <code>App.tsx</code> and save to test HMR updates.
        //     </p>
        //     <p>
        //       <a
        //         className="App-link"
        //         href="https://reactjs.org"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         Learn React
        //       </a>
        //       {' | '}
        //       <a
        //         className="App-link"
        //         href="https://vitejs.dev/guide/features.html"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         Vite Docs
        //       </a>
        //     </p>
        //   </header>
        // </div>
    )
}

export default App
