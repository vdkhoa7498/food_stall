import { Layout, Tabs  } from 'antd';
import React, {useState} from 'react'
import AddNewOrder from './addNewOrder';
import OrderList from './orderList';
import './orders.css'

const { Content } = Layout;
const { TabPane } = Tabs;

const Order = (props) =>{
  
  const [currentTab, setCurrentTab] = useState(1)

    return(
        <Content
          className="site-layout-background"
          style={{
            margin: ' 12px 16px',
            padding: 24,
            minHeight: 150,
          }}
        >
          <Tabs defaultActiveKey="1" onChange = {(key)=> console.log(key)}>
          <TabPane tab="Tạo Đơn Hàng Mới" key="1">
            <AddNewOrder key="1"/>
          </TabPane>
          <TabPane tab="Danh Sách Đơn Hàng" key="2">
            <OrderList/>
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
          
        </Content>
    )

}

export default Order