
import UserModel from '../model/UserModel';
import React, { useState} from 'react';
import UserContainer from '../container/UserContainer';
import { useStore } from '../store/TestCountStore';
import { Table } from 'antd';

//FIXME: Test Page --> 실제 사용할 페이지로 네이밍하고 교체하기



const TestPage1 = () => {

    const store = useStore();
    const userContainer = store.userContainer;
    const uniqueKey = userContainer.getUniqueKey();

    const PAGE_SIZE = 5;

    const columns = [
        {
            title: 'Name',     // title: 제목라인
            dataIndex: 'name', // dataIndex: 실제 값
            key: 'name',       // dataIndex와 일치해야 하며, dataIndex가 있으면 굳이 필요없음
            width: 150,
        },
        {
            title: 'PhoneNumber',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            ellipsis: true,
        },
    ];

    function addUser() {
        const userModel = new UserModel(uniqueKey, "010-0000-0000", "우영우", "000");
        userContainer.setUniqueKey(uniqueKey + 1);
        
        userContainer.getUserModelList().push(userModel);
        userContainer.users.push(
            {
                key: userModel.getUserUniqueNum(),
                name: userModel.getUserName(),
                phoneNumber: userModel.getMobileNumber()
            },
        );
    }

    return (
        <>
            <div className={"flex-col h-12"}>
                <button type="button"
                    className="toggle-theme-button absolute right-5 bg-yellow-600 text-amber-50 p-1 rounded-md w-[100px]"
                    onClick={addUser}
                >
                    회원 추가
                </button>
            </div>
           <Table columns={columns} dataSource={userContainer.users.slice(PAGE_SIZE)} pagination={{ pageSize: PAGE_SIZE}} />
        </>
    )
};

export default TestPage1;