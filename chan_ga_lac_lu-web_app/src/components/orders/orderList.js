import { List, Card, Popover, Button } from 'antd';
import React, {useState} from 'react'
import OrderStatus from '../common/orderStatus';


const OrderList = (props) =>{
    
    const [ordersList, setOrdersList] = useState([
        {
          title: "Thập cẩm lắc lư",
          description: "Trứng non, chân rút, bạch tuột",
          price: 100,
          quantity: 1
        },
        {
          title: "Thập cẩm muối ớt",
          description: "Mề gà, chân vịt, bạch tuột",
          price: 100,
          quantity: 4
        },
      ])


    return(
        <>
            <List
            bordered
            dataSource={ordersList}
            renderItem={item => 
                <Card 
                    title="Inner Card title" 
                    extra={ <OrderStatus/>}
                >
                        
                    <List.Item>{item.title}</List.Item>
                    <List.Item>{item.description}</List.Item>
                    <List.Item>{item.price}</List.Item>
                </Card>}
            />
        </>
    )
}

export default OrderList