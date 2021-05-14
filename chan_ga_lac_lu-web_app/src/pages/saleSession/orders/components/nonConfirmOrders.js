import React, {useState} from 'react'
import { Table, Select } from 'antd';

const { Option } = Select;

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
    // {
    //   title: 'Shipper',
    //   dataIndex: 'shipper',
    //   key: 'shipper',
    //   width: 120,
    //   render: shipper =>(
    //     <>
    //         {
    //             (shipper=="")
    //             ? <div>Chưa có shipper</div>
    //             : <div>{shipper}</div>
    //         }
    //     </>
    //   ),
    // },
    {
      title: 'Tổng tiền',
      dataIndex: 'total',
      key: 'total',
      width: 120,
      render: total =>(<div>{total} 000 VND</div>)
    },
    {
      title: 'Trạng thái',
      key: 'status',
      dataIndex: 'status',
      fixed: 'right',
      width: 130,
      render: (status, index) =>(
        <Select defaultValue={status} style={{ width: 120 }} onChange={()=>{console.log(index)}}>
          <Option value="jack">Duyệt đơn</Option>
          <Option value="lucy">Huỷ đơn</Option>
        </Select>
      )
    },
  ];

const OrderList = (props) =>{
    return(
        <Table rowKey='id' bordered columns={columns} dataSource={props.data} scroll={{x:1000, y: 700 }}/>
    )
}

export default OrderList