import React from 'react';
import { Layout} from 'antd';
import Nav from "./Nav";
import '../styles/game.css'

const { Header, Content, Footer } = Layout;

const MainLayout = ({children}) => {
    return(
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Nav />
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-content">
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}
export default MainLayout;