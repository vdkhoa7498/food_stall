import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UnorderedListOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';
import React, {useState} from 'react'
import "./dashBoard.css"

import Order from '../../components/orders/orders';


const { Header, Sider, Content } = Layout;

const DashBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuSelect, setMenuSelect] = useState(1);

  const toggle = () => {
    setCollapsed(!collapsed)
  };

  const handleClickMenu = event =>{
    setMenuSelect(event.key)
  }

  return (
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleClickMenu}>
          <Menu.Item key="1" icon={<UnorderedListOutlined />}>
            Đơn hàng
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Shipper
          </Menu.Item>
          <Menu.Item key="3" icon={<AreaChartOutlined />}>
            Thống kê
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        
        {(menuSelect == 1) ? (<Order/>)
        : (menuSelect ==2) ? (<div>menu 2</div>)
        : (<div>menu 3</div>)}
        
      </Layout>
    </Layout>
  );
}
export default DashBoard
// ReactDOM.render(<SiderDemo />, mountNode);