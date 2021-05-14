import { Layout, Tabs, Button, Modal, Input } from 'antd';
import { EditOutlined, MoneyCollectOutlined} from '@ant-design/icons'
import { addMainFood, addSnackFood} from '../../services/food.services'
import React, {useState} from 'react'
import MainFood from './foods/mainFood';
import SnackFood from './foods/snackFood';

const { Content } = Layout;
const { TabPane } = Tabs;

const Setting = () =>{

  const [currentTab, setCurrentTab] = useState(1)
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [mainFood, setMainFood] = useState('')
  const [snackFood, setSnackFood] = useState('')
  const [price, setPrice] = useState(0)

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    if(currentTab===1){
      addMainFood(mainFood)
    }
    else{
      addSnackFood(snackFood, price)
      console.log('snackFood', snackFood, price)
    }
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return(
      <Content
        className="site-layout-background"
        style={{
          margin: ' 12px 16px',
          padding: 24,
          minHeight: 500,
        }}
      >
        <Tabs 
          defaultActiveKey="1" 
          onChange = {(key)=> setCurrentTab(key)}
          tabBarExtraContent={<Button onClick={showModal}>Thêm món</Button>}>
        <TabPane tab="Danh sách món chính" key="1">
          <MainFood key="1"/>
        </TabPane>
        <TabPane tab="Danh Sách món ăn vặt" key="2">
          <SnackFood/>
        </TabPane>

        <Button>Thêm</Button>
      </Tabs>
      <Modal
        title="Thêm món mới"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
      {(currentTab == 1) 
      ? <Input 
          onChange={(e)=>{setMainFood(e.target.value)}} 
          prefix={<EditOutlined />} 
          placeholder="Tên món ăn" />
      : <>
        <Input 
          onChange={(e)=>{setSnackFood(e.target.value)}} 
          prefix={<EditOutlined />} 
          placeholder="Tên món ăn" />
        <Input 
        style={{marginTop: 10}}
          onChange={(e)=>{setPrice(e.target.value)}} 
          prefix={<MoneyCollectOutlined />} 
          placeholder="Giá món ăn" />
      </>}
      </Modal>
    </Content>
  )
}

export default Setting