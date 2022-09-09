import React, {createElement, useEffect, useState} from 'react';
import {Outlet, To, useNavigate} from "react-router-dom";
import {Layout, Menu} from "antd";
import {
    AlertTwoTone,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons';
import logo from "../../image/logo.png";
import {useLocation} from "react-router";
import {PAGE_URL} from "../../constant/PageURL";

const {Header, Footer, Sider, Content} = Layout;

const pageLabel = () => {
    const link = window.location.pathname;

    if (link.includes(PAGE_URL.USER_MANAGING)) return "회원관리";
    else if (link.includes(PAGE_URL.BUSINESS_DAY_MANAGING)) return "영업일관리";
    else if (link.includes(PAGE_URL.CLASSROOM_MANAGING)) return "연습실관리";
    else if (link.includes(PAGE_URL.LESSON_MANAGING)) return "레슨관리";
    else return "";
}

const PageLayout = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [collapsed, setCollapsed] = useState(true);
    const [headerName, setHeaderName] = useState(<span>{pageLabel()}</span>);

    useEffect(() => {
        setHeaderName(<span>{pageLabel()}</span>);
    }, [window.location.pathname])

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
                            key: PAGE_URL.USER_MANAGING,
                            icon: <UserOutlined/>,
                            label: "회원관리",
                        },
                        {
                            key: PAGE_URL.BUSINESS_DAY_MANAGING,
                            icon: <VideoCameraOutlined/>,
                            label: "영업일관리",
                        },
                        {
                            key: PAGE_URL.CLASSROOM_MANAGING,
                            icon: <UploadOutlined/>,
                            label: "연습실관리",
                        },
                        {
                            key: PAGE_URL.LESSON_MANAGING,
                            icon: <AlertTwoTone/>,
                            label: "레슨관리",
                        }
                    ]}
                />

            </Sider>
            <Layout>
                <Header className={"bg-amber-50 pl-5 pr-5 flex flex-row items-center [&>span:not(:first-child)]:pl-3"}>
                    {
                        createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: "trigger",
                            onClick: () => setCollapsed(prev => !prev),
                        })
                    }
                    {headerName}
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