import React, {useState} from 'react'
import { Table, Modal, Button, Row, Col } from 'antd';
import {changeOrderStatusEmit} from '../../../../socketio/emit'

const columns = [
    {
        title: 'Khách hàng',
        dataIndex: 'customerInfo',
        key: 'customerInfo',
        render: customerInfo => (
            <>
              <div style={{fontWeight: "bold"}}>{customerInfo.customerName}</div>
              <div style={{fontWeight: "bold"}}>{customerInfo.customerPhone}</div>
              <div>{customerInfo.customerAddress.detail} {customerInfo.customerAddress.street}, {customerInfo.customerAddress.district}, {customerInfo.customerAddress.city}</div>
              
            </>
          ),
    },
    {
    title: 'Nội dung hoá đơn',
    dataIndex: 'purchase',
    key: 'purchase',
    width: 400,
    render: purchases => (
        <>
          {purchases.map(purchase => 
            (
                <div><span>{purchase.content}</span>   {purchase.total} 000 VND <span style={{fontWeight: "bold"}}>x{purchase.quantity}</span></div>
            )
          )}
        </>
      ),
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      key: 'note',
      width: 200,
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total',
      key: 'total',
      width: 120,
      render: total =>(<div>{total} 000 VND</div>)
    },
  ];

const OrderList = (props) =>{
  const [visible, setVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null)

  return(
    <>
      <Table 
        rowKey='id' 
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              setSelectedOrder(record)
              setVisible(true)
            },
          }}
        }
        bordered 
        columns={columns}
        dataSource={props.data} 
        scroll={{x:1000, y: 700 }}/>
      <Modal
        title="Thông tin đơn hàng"
        visible={visible}
        width={700}
        footer={[<Button onClick={()=>setVisible(false)}>Cancel</Button>]}
      >
        {(!selectedOrder) ? <div></div> :
          <Row>
            <Col xl={18} xs={24}>
              <div style={{fontWeight: "bold"}}>{selectedOrder.customerInfo.customerName} {selectedOrder.customerInfo.customerPhone}</div>
              
              <div>{selectedOrder.customerInfo.customerAddress.detail} {selectedOrder.customerInfo.customerAddress.street}, {selectedOrder.customerInfo.customerAddress.district}, {selectedOrder.customerInfo.customerAddress.city}</div>
              {selectedOrder.purchase.map(purchase => 
                (
                    <div><span>{purchase.content}</span>   {purchase.total} 000 VND <span style={{fontWeight: "bold"}}>x{purchase.quantity}</span></div>
                )
              )}
              <div style={{fontWeight: 'bold'}}>{selectedOrder.total} 000 VND</div>
            </Col>
            <Col xl={4} xs={24}>
              <Button 
                style={{margin: 5, width: 120}}
                onClick={()=>{
                  changeOrderStatusEmit(selectedOrder._id, 'Đã duyệt')
                  setVisible(false)
                }}
              >Duyệt Đơn</Button>
              <Button 
                style={{margin: 5, width: 120}}
                onClick={()=>{
                  changeOrderStatusEmit(selectedOrder._id, 'Đã huỷ')
                  setVisible(false)
                }}
              >Huỷ Đơn</Button>
            </Col>
          </Row>
        }
      </Modal>
    </>
  )
}

export default OrderList