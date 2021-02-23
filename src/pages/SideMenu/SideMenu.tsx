import React from 'react';
import { Menu } from 'antd';
import {
    CarOutlined,
    BookOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom'

const SideMenu = () => {

    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to='/homePage'>Главная</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CarOutlined />}>
                <Link to='/orderTaxi'>Пункт 1</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<BookOutlined />}>
                <Link to='/myTrips'>Пункт 2</Link>
            </Menu.Item>
        </Menu>
    );
};

export default SideMenu;