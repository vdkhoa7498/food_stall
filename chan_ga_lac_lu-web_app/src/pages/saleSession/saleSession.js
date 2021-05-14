import { Layout, Checkbox, Button, Row, Col, Divider, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import React, {useState} from 'react'
import Orders from './orders/orders';

const { Content } = Layout;
const data = [
    {
        id: 1,
        created_at: Date.now()
    },
    {
        id: 2,
        created_at: Date.now()
    },
]

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        with: 50,
    },
    {
        title: 'Title',
        dataIndex: 'id',
        key: 'title',
        render: (index) =>
        <div style={{fontWeight: 'bold'}}>Buoi ban hang #{index}</div>
    },
    {
      title: 'Created Date',
      dataIndex: 'created_at',
      key: 'created_at',
      render: create_at => {
        const date_ob = new Date(create_at)
        const year = date_ob.getFullYear();
        const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        const date = ("0" + date_ob.getDate()).slice(-2);
  
        const hours = ("0" + date_ob.getHours()).slice(-2);
        const minutes = ("0" + date_ob.getMinutes()).slice(-2);
        const seconds = ("0" + date_ob.getSeconds()).slice(-2);
        return(
        <span>{year}/{month}/{date} - {hours}:{minutes}:{seconds}</span>
      )}
    }
]

const SaleSession = (props) =>{
  const[isChecked, setIsChecked] = useState(true);

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

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
            <Row>
                <h2>Buổi bán hàng</h2>
                <Divider/>
                <Col xl={8} sm={24} style={{marginTop: 20}}>
                    <h1 style={{fontWeight: 'bold'}}>
                        Tạo buổi bán hàng mới
                    </h1>
                    <br/>
                    <div>
                        <Checkbox defaultChecked={isChecked} onChange={onChange}>Thêm đơn hàng chưa duyệt</Checkbox>
                    </div>
                    <br/>
                    <div>
                        <Button type="primary"><PlusOutlined/> Tạo buổi bán hàng</Button>
                    </div>
                </Col>
                <Col xl={16} sm={24} style={{marginTop: 20}}>
                <h1 style={{fontWeight: 'bold'}}>Danh sách buổi bán hàng</h1>
                <br/>
                <Table 
                    columns={columns} 
                    rowKey='id'
                    dataSource={data} 
                    bordered 
                    pagination= {true}
                    scroll={{ x: 'calc(700px + 50%)', y: 500 }}
                    />
                </Col>
            </Row>

          
        </Content>
    )

}

export default SaleSession