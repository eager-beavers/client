import React, {createElement, useState} from 'react';
import {Outlet, To, useNavigate} from "react-router-dom";
import {Layout, Menu} from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import logo from "../../image/logo.png";
import {useLocation} from "react-router";

const {Header, Footer, Sider, Content} = Layout;

const PageLayout = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [collapsed, setCollapsed] = useState(true);

    const onChangePage = (e: { key: To; }) => {
        navigate(e.key);
    }

    return (
        <Layout className={"h-full"}>
            <Sider className={"bg-yellow-600"} trigger={null} collapsible collapsed={collapsed}>
                <div className={"h-[32px] m-[16px] bg-amber-50 rounded flex relative"}>
                    <div className={"w-[48px] bg-transparent absolute z-10"}>
                        <img src={logo} alt={"logo"}/>
                    </div>
                    <div
                        className={`${collapsed ? "w-[0px]" : "w-[120px]"} overflow-hidden flex items-center justify-center whitespace-nowrap ml-auto`}>
                        <span
                            className={`transition-opacity duration-1000 linear ${collapsed ? "opacity-0" : "opacity-100"}`}>Drum bbang!</span>
                    </div>
                </div>

                <Menu
                    className={"bg-amber-50"}
                    mode="inline"
                    defaultSelectedKeys={[pathname]}
                    onClick={onChangePage}
                    items={[
                        {
                            key: '/test1',
                            icon: <UserOutlined/>,
                            label: 'nav 1',
                        },
                        {
                            key: '/test2',
                            icon: <VideoCameraOutlined/>,
                            label: 'nav 2',
                        },
                        {
                            key: '/test3',
                            icon: <UploadOutlined/>,
                            label: 'nav 3',
                        },
                    ]}
                />

            </Sider>
            <Layout>
                <Header className={"bg-amber-50 pl-5 pr-5"}>
                    {
                        createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: "trigger",
                            onClick: () => setCollapsed(prev => !prev)
                        })
                    }
                </Header>
                <Content className={"bg-amber-50 p-5"}>
                    <Outlet/>
                </Content>
                {/*<Footer>Footer</Footer>*/}
            </Layout>
        </Layout>
    )
};

export default PageLayout;