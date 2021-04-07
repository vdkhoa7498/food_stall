import {Button, Popover} from 'antd'
import React, {useState} from 'react'
const OrderStatus = () =>{

    const [currentStatus, setCurrentStatus] = useState('Chưa Duyệt')
    const [visible, setVisible] = useState(false)

    const hide = () => {
        setVisible(false)
      };
      const handleVisibleChange = visible => {
        setVisible(visible)
      };

    const onChangeStatus =(status) =>{
        setCurrentStatus(status);
        setVisible(false)
    }

    return(
        <Popover
            content={
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Button type="link" onClick={()=>{onChangeStatus("Đã Duyệt")}} >Duyệt Đơn</Button>
                    <Button type="link" onClick={()=>{onChangeStatus("Đã Huỷ")}}>Huỷ Đơn</Button>
                </div>
            }
            trigger="click"
            visible={visible}
            placement="bottomRight"
            onVisibleChange={handleVisibleChange}
        >
            <Button >{currentStatus}</Button>
        </Popover>
    )
}

export default OrderStatus