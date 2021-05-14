import React, {useState, useEffect} from 'react'
import { Layout, Button, Modal, Input, Card, Row, Col } from 'antd';
import { useSelector } from 'react-redux'
import { PlusOutlined } from '@ant-design/icons'
import InputAutoComplete from '../../../components/common/Input/inputAutoComplete'
import { getCustomers } from '../../../services/customer.services';

const { Content } = Layout;


const CustomerSetting = () =>{

  const [customers, setCustomers] = useState([])

  const [detail, setDetail] = useState('')
  const [streetId, setStreetId] = useState(1)
  const [districtId, setDistrictId] = useState(1)
  const [cityId, setCityId] = useState(1)

  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')

  const streets = useSelector(state => state.streetsReducer.data)
  const districts = useSelector(state => state.districtsReducer.data)
  const cities = useSelector(state => state.citiesReducer.data)

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {

    console.log(detail, streetId, districtId, cityId, customerName, customerPhone)
    
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(()=>{
    getCustomers()
    .then(res => setCustomers(res.data))
    .catch(err => console.log(err))
  },[])

  return(
      <Content
        className="site-layout-background"
        style={{
          margin: ' 12px 16px',
          padding: 24,
          minHeight: 150,
        }}
      >
        <Card 
          // size="small" 
          title="Danh sách khách hàng" 
          bordered={false} 
          extra={<Button onClick={showModal}><PlusOutlined/>Thêm khách hàng mới</Button>}
        >
          {
            customers.map((customer, index) =>
              <div key={index}>
                <p>{customer.customerName}</p>
                <p>{customer.phone}</p>
              </div>
            )
          }
          
        </Card>
      <Modal
        title="Thêm khách hàng mới"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width = {600}
      >
        <Row>
          <Col span={24}>
            <Input onChange={(e)=>{setCustomerName(e.target.value)}} placeholder = "Tên Khách hàng" style={{width: 250, marginRight: 15}}></Input>
            <Input onChange={(e)=>{setCustomerPhone(e.target.value)}} placeholder = "Số điện thoại" style={{width: 250, marginRight: 15}}></Input>
            
          </Col>
          <Col span={24} style={{marginTop: 15}}>
            <Input onChange={(e)=>{setDetail(e.target.value)}} placeholder = "Số nhà, Phường, ..." style={{width: 300, marginRight: 15}}></Input>
            <InputAutoComplete setId={setStreetId} type="streets" placeholder="Đường" data={streets} style={{width: 200, marginRight: 15}}/>
            
          </Col>
          <Col span={24} style={{marginTop: 15}}>
            <InputAutoComplete setId={setDistrictId} type="districts" placeholder="Quận" data={districts} style={{width: 200, marginRight: 15}}/>
            <InputAutoComplete setId={setCityId} type="cities" placeholder="Tỉnh/ Thành Phố" data={cities} style={{width: 200, marginRight: 15}}/>
          </Col>
        </Row>
      
      </Modal>
    </Content>
  )
}

export default CustomerSetting