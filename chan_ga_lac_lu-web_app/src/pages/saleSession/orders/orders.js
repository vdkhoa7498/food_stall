import { Layout, Tabs } from 'antd';
import React from 'react'
import {useSelector} from 'react-redux'
import AddNewOrder from './components/addNewOrder';
import OrderList from './components/orderList';
import './orders.css'

const { Content } = Layout;
const { TabPane } = Tabs;

const Order = (props) =>{
  
  const orderList = useSelector(state => state.orderReducer.orderList)
  const nonConfirmOrderList = orderList.filter(order=> order.status =='Chưa duyệt')
  const confirmedOrderList = orderList.filter(order=> order.status =='Đã duyệt')
  const cancelledOrderList = orderList.filter(order=> order.status =='Đã huỷ')
  console.log(orderList)
    return(
        <Content
          className="site-layout-background"
          style={{
            margin: ' 12px 16px',
            padding: 24,
            minHeight: 700,
            overflow: 'auto',
          }}
        >

          <Tabs defaultActiveKey="1">
          <TabPane tab="Tạo Đơn Hàng Mới" key="1">
            <AddNewOrder/>
          </TabPane>
          <TabPane tab="Đơn Hàng Chưa duyệt" key="2">
            <OrderList data={nonConfirmOrderList} />
          </TabPane>
          <TabPane tab="Đơn Hàng Đã duyệt" key="3">
            <OrderList data={confirmedOrderList} />
          </TabPane>
          <TabPane tab="Đơn Hàng Đã huỷ" key="4">
            <OrderList data={cancelledOrderList} />
          </TabPane>
        </Tabs>
          
        </Content>
    )

}

export default Order