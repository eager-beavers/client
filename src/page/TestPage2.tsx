import React from 'react';
import {apiTest} from "../api/ApiTest";

//FIXME: Test Page --> 실제 사용할 페이지로 네이밍하고 교체하기
const TestPage2 = () => {

    const apiCallTest = async () => {
        apiTest().then(result => {
            console.log(result.data);
        })
    }

    return (
        <button onClick={() => apiCallTest()}>Test Page 2</button>
    )
};

export default TestPage2;