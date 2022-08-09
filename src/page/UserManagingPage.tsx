import React from 'react';
import {userStore} from '../store/UserStore';
import {Table} from 'antd';
import UserModel from "../model/UserModel";

//FIXME: Test Page --> 실제 사용할 페이지로 네이밍하고 교체하기


const UserManagingPage = () => {
    const {userList, addUser, removeUser} = userStore();


    const PAGE_SIZE = 5;

    const columns = [
        {
            title: 'Name',     // title: 제목라인
            dataIndex: 'userName', // dataIndex: 실제 값
            key: 'userName',       // dataIndex와 일치해야 하며, dataIndex가 있으면 굳이 필요없음
            width: 150,
        },
        {
            title: 'Mobile Number',
            dataIndex: 'mobileNumber',
            key: 'mobileNumber',
            ellipsis: true,
        },
    ];

    return (
        <>
            <div className={"flex-col h-12"}>
                <button type="button"
                        className="toggle-theme-button absolute right-5 bg-yellow-600 text-amber-50 p-1 rounded-md w-[100px]"
                        onClick={() => addUser(new UserModel(0, "010-0000-0000", "우영우", "000"))}
                >
                    회원 추가
                </button>
            </div>
            <Table columns={columns} dataSource={userList}/>
        </>
    )
};

export default UserManagingPage;