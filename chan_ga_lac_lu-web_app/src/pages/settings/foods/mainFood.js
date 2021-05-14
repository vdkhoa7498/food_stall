import { List, Button, Modal, Input } from 'antd';
import {EditOutlined, DeleteOutlined, ExclamationCircleOutlined} from '@ant-design/icons'
import React, {useState, useEffect} from 'react'
import { deleteMainFoodById, editMainFoodById, getMainFoods } from '../../../services/food.services';

const { confirm } = Modal;

const MainFood = () =>{

    const [mainFoods, setMainFoods] = useState([])
    const [defaultFood, setDefaultFood] = useState('Chân gà xương')
    const [foodValue, setFoodValue] = useState('')
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
          mainFoods.splice(foodIndex, 1)
          deleteMainFoodById(data._id)
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
      mainFoods[foodIndex].foodName = foodValue;
      editMainFoodById(foodId, foodValue)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    };

    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisibleFoodModal(false);
    };

    const onChangeInput = (e) =>{
      setFoodValue(e.target.value)
    }

    useEffect(()=>{
        getMainFoods()
        .then(res =>{
            setMainFoods(res.data)
        })
    },[])
    return(
      <>
        <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={mainFoods}
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
          <Input onChange={onChangeInput} placeholder={defaultFood} />
        </Modal>
      </>
    )
}

export default MainFood