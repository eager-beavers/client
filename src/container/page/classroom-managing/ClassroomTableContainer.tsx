import React, {useState} from 'react';
import {Button, Dropdown, Menu, Space, Table} from "antd";
import TableWrapper from "./TableWrapper";
import menu, { MenuProps } from 'antd/lib/menu';

const ClassroomTableContainer = () => {

    const [roomState, setRoomState] = useState('사용 가능');
    const onClick: MenuProps['onClick'] = e => {
        if (e.key === '1')
            setRoomState('사용 가능');
        else if (e.key === '2')
            setRoomState('사용 중');
        else
            setRoomState('사용 불가');
    };

    const menu = (
        <Menu
            items={[
                {
                    key: '1', // roomModel 생성 시 상태 코드로 변경 예정
                    label: (
                        <div>
                            사용 가능
                        </div>
                    ),
                    onClick: onClick
                },
                {
                    key: '2', // roomModel 생성 시 상태 코드로 변경 예정
                    label: (
                        <div>
                            사용 중
                        </div>
                    ),
                    onClick: onClick
                },
                {
                    key: '3', // roomModel 생성 시 상태 코드로 변경 예정
                    label: (
                        <div>
                            사용 불가
                        </div>
                    ),
                    onClick: onClick
                },
            ]}
        />
    );

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },

    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <Dropdown overlay={menu} placement="bottom" arrow>
                        <Button>{roomState}</Button>
                    </Dropdown>
                </Space>
            ),
        },
    ];

    return (
        <TableWrapper>
            <Table dataSource={dataSource} columns={columns}/>
        </TableWrapper>
    )
};

export default ClassroomTableContainer;