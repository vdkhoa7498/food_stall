import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UnorderedListOutlined,
  AreaChartOutlined,
  SettingOutlined
} from '@ant-design/icons';
import React, {useState} from 'react'
import { Link } from  'react-router-dom'

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

const PrivateLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [menuSelect, setMenuSelect] = useState(1);

  const toggle = () => {
    setCollapsed(!collapsed)
  };

  const handleClickMenu = event =>{
    setMenuSelect(event.key)
  }

  return (
    <Layout style={{minHeight: 600}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleClickMenu}>
         
          <Menu.Item key="1" icon={<UnorderedListOutlined />}>
            <Link to="/sale-session">
              Đơn hàng
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/shippers">
              Shipper
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<AreaChartOutlined />}>
            Thống kê
          </Menu.Item>
          {/* <Menu.Item key="4" icon={<SettingOutlined />}>
            Thiết lập
          </Menu.Item> */}
          <SubMenu key="sub4" icon={<SettingOutlined />} title="Thiết lập">
            <Menu.Item key="4">
              <Link to="/setting/foods">
                Món ăn
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/setting/customers">
                Khách hàng
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
         {children}
      </Layout>
    </Layout>
  );
}
export default PrivateLayout