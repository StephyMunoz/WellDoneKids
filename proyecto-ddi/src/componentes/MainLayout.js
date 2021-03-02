import React from 'react';
import {Image, Layout} from 'antd';
import Nav from "./Nav";
import '../styles/game.css';
import logo from '../images/welldonekidslogo.png'

const { Header, Content, Footer } = Layout;

const MainLayout = ({children}) => {
    return(
        <Layout className="MainLayout">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" >
                    <Image src={logo} />
                </div>
                <Nav />
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-content">
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Well Done Kids</Footer>
        </Layout>
    );
}
export default MainLayout;