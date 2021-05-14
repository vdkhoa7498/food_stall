import { List, Button, Modal, Input } from 'antd';
import {EditOutlined, DeleteOutlined, ExclamationCircleOutlined, MoneyCollectOutlined} from '@ant-design/icons'
import React, {useState, useEffect} from 'react'
import { deleteSnackFoodById, editSnackFoodById, getSnackFoods } from '../../../services/food.services';

const { confirm } = Modal;

const SnackFood = () =>{

    const [snackFoods, setSnackFoods] = useState([])
    const [defaultFood, setDefaultFood] = useState('Chân gà xương')
    const [foodValue, setFoodValue] = useState('')
    const [foodPrice, setFoodPrice] = useState('')
    const [foodIndex, setFoodIndex] = useState('')
    const [foodId, setFoodId] = useState('')

    const editFood = (data, index) =>{
      setDefaultFood(data.foodName);
      setFoodId(data.foodId)
      setFoodIndex(index);
      showModal();
    }

    const deleteFood = (data)=>{
      confirm({
        title: 'Bạn có muốn xoá món ăn này không?',
        icon: <ExclamationCircleOutlined />,
        content: data.foodName,
        onOk() {
          snackFoods.splice(foodIndex, 1)
          deleteSnackFoodById(data._id)
          .then(res => console.log(res))
          .catch(err => console.log(err))
        },
        onCancel() {
          
        },
      });
    }

    const [visibleFoodModal, setVisibleFoodModal] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    
    const showModal = () => {
      setVisibleFoodModal(true);
    };

    const handleOkEdit = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setVisibleFoodModal(false);
        setConfirmLoading(false);
      }, 500);
      snackFoods[foodIndex].foodName = foodValue;
      snackFoods[foodIndex].price = foodPrice;
      editSnackFoodById(foodId, foodValue, foodPrice)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    };

    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisibleFoodModal(false);
    };

    useEffect(()=>{
        getSnackFoods()
        .then(res =>{
            setSnackFoods(res.data)
        })
    },[])
    return(
      <>
        <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={snackFoods}
        renderItem={(food, index) => (
          <List.Item
            style={{backgroundColor: (index%2==0)? "#cddfe5" : "#fff"}}
            actions={[<Button onClick={()=>editFood(food, index)}><EditOutlined />Sửa</Button>,
                <Button onClick={()=>deleteFood(food)}><DeleteOutlined />Xoá</Button>]
            }
          >
            <List.Item.Meta
                style={{marginLeft: 30}}
                title={food.foodName}
              />
            <List.Item.Meta
                style={{marginLeft: 30}}
                title={food.price + ' 000 VND'}
              />
          </List.Item>
          )}
        />

        <Modal
          title="Món ăn"
          visible={visibleFoodModal}
          onOk={handleOkEdit}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Input 
            onChange={(e)=>{setFoodValue(e.target.value)}} 
            prefix={<EditOutlined />} 
            placeholder={defaultFood} />
          <Input 
            style={{marginTop: 10}}
            onChange={(e)=>{setFoodPrice(e.target.value)}} 
            prefix={<MoneyCollectOutlined />} 
            placeholder="Giá món ăn" />
        </Modal>
      </>
    )
}

export default SnackFood