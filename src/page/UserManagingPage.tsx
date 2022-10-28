import React, {useEffect, useState} from 'react';
import {userStore} from '../store/UserStore';
import {Space, Table} from 'antd';
import UserModel from "../model/UserModel";
import UserDialog from './UserDialog';

//FIXME: Test Page --> 실제 사용할 페이지로 네이밍하고 교체하기


const UserManagingPage = () => {
    const {userList, addUser, removeUser} = userStore();

    useEffect(() => {
        console.log(userList);
    }, [userList])

    // TODO DB 값으로 교체
    const [userUniqueNum, setUserUniqueNum] = useState(1);

    const [currentUserId, setCurrentUserId] = useState(1);

    const [isNew, setIsNew] = useState(false);

    const [isChange, setIsChange] = useState(false);

    const showModal = (user?: UserModel) => {
        if (user === undefined) {
            setIsNew(true);
        } else {
            setCurrentUserId(user.getUserUniqueNum())
            setIsChange(true);
        }
    };

    const PAGE_SIZE = 5;

    const columns = [
        {
            title: 'Name',
            dataIndex: 'userName',
            key: 'userName',
            width: 150,
        },
        {
            title: 'Mobile Number',
            dataIndex: 'mobileNumber',
            key: 'mobileNumber',
            ellipsis: true,
        },
        {
            title: 'Action',
            key: 'action',
            render: (user: UserModel) => (
                <Space size="middle">
                    <div className="flex flex-row justify-center items-center">
                        <button type="button"
                                className="toggle-theme-button flex right-5 bg-yellow-600 text-amber-50 p-1 rounded-md w-[80px] mx-5 text-center justify-center"
                                onClick={() => showModal(user)}
                        >
                            변경
                        </button>
                        {isChange && currentUserId === user.getUserUniqueNum() &&
                            <UserDialog visible={true} userUniqueNum={user.getUserUniqueNum()} setIsOpen={setIsChange}
                                        setUserUniqueNum={setUserUniqueNum} userModel={user}/>}
                        <button type="button"
                                className="toggle-theme-button flex right-5 bg-yellow-600 text-amber-50 p-1 rounded-md w-[80px] text-center justify-center"
                                onClick={() => removeUser(user.getUserUniqueNum())}
                        >
                            삭제
                        </button>
                    </div>
                </Space>
            ),
        },
    ];

    return (
        <>
            <div className={"flex-col h-12"}>
                <button type="button"
                        className="toggle-theme-button absolute right-5 bg-yellow-600 text-amber-50 p-1 rounded-md w-[100px]"
                        onClick={() => showModal(undefined)}
                >
                    회원 추가
                </button>
                {isNew && <UserDialog visible={true} userUniqueNum={userUniqueNum + 1} setIsOpen={setIsNew}
                                      setUserUniqueNum={setUserUniqueNum}/>}
            </div>
            <Table columns={columns} dataSource={userList}/>
        </>
    )
};

export default UserManagingPage;