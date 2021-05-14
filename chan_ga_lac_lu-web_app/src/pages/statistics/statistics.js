import { Layout, Tabs  } from 'antd';
import React from 'react'
import CustomerStatistics from './components/customerStatistics';
import FoodStatistics from './components/foodStatistics';
import RevenueStatistics from './components/revenueStatistics';

const { Content } = Layout;
const { TabPane } = Tabs;

const Statistics = (props) =>{
  
    return(
        <Content
          className="site-layout-background"
          style={{
            margin: ' 12px 16px',
            padding: 24,
            minHeight: 150,
          }}
        >
          <Tabs defaultActiveKey="1">
          <TabPane tab="Thống kê doanh thu" key="1">
            <RevenueStatistics />
          </TabPane>
          <TabPane tab="Thống kê khách hàng" key="2">
            <CustomerStatistics/>
          </TabPane>
          <TabPane tab="Thống kê món ăn" key="3">
            <FoodStatistics/>
          </TabPane>
        </Tabs>
          
        </Content>
    )

}

export default Statistics