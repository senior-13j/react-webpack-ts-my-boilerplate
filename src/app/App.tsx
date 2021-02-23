import React, { useState } from 'react';
import classes from './App.module.less'
import { Layout } from 'antd';
import SideMenu from '../pages/SideMenu/SideMenu';
import { BrowserRouter } from 'react-router-dom';
import ContentRouter from '../pages/ContentRouter';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {

    const [collapsed, setCollapse] = useState(false);

    const onCollapse = (collapsed: boolean) => {
        setCollapse(collapsed)
    };

    return (
        <BrowserRouter>
            <Layout className={classes.layout}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <SideMenu />
                </Sider>
                <Layout>
                    <Header className={classes.header} />
                    <Content className={classes.content}>
                        <ContentRouter></ContentRouter>
                    </Content>
                    <Footer className={classes.footer}>Created by Arkadiy Kotlyarov</Footer>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
};

export default App;