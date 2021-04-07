import { Input, Button, Drawer, List, Row, Col, Radio, Checkbox, Divider, message} from 'antd';
import React, {useState, useEffect} from 'react'
import { getFoods, getFoodsByType } from '../../services/food.services';
import InputAutoComplete from '../common/Input/inputAutoComplete';
import InputAutoCompleteGetId from '../common/Input/inputAutoCompleteGetId';
import {PlusOutlined} from '@ant-design/icons'
import {useDispatch, useSelector} from 'react-redux'
import { addOrder } from '../../action/orderAction';

const AddNewOrder = (props) =>{
  const dispatch = useDispatch()

  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(false);
  const [tasteValue, setTasteValue] = useState(1);
  const [priceValue, setPriceValue] = useState(100);
  const [priceValueMore, setPriceValueMore] = useState(0);
  const [foodsChosen, setFoodsChosen] = useState([])

  const [note, setNote] = useState('')
  const [cusName, setCusName] = useState('')
  const [cusPhone, setCusPhone] = useState('')
  const [addDetail, setAddDetail] = useState('')
  const [addStreet, setAddStreet] = useState(1)
  const [addDistrict, setAddDistrict] = useState(1)
  const [addCity, setAddCity] = useState(1)

  const [orderFoods, setOrderFoods] = useState([])
  const [mainFood, setMainFood] = useState([])
  const [snackFood, setSnackFood] = useState([])

  const customersName = useSelector(state => state.customersNameReducer.data)
  const customersPhone = useSelector(state => state.customersPhoneReducer.data)
  const streets = useSelector(state => state.streetsReducer.data)
  const districts = useSelector(state => state.districtsReducer.data)
  const cities = useSelector(state => state.citiesReducer.data)

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  const onClose = () => {
    setVisible(false);
  };

  const onChangeTaste = e => {
    setTasteValue(e.target.value)
  };

  const onSelectMainFoods = (index, isChecked) => {
    console.log(index, isChecked)
    foodsChosen[index] = isChecked;
    setFoodsChosen([...foodsChosen])
    console.log(foodsChosen)
  };


  const onChangePrice = e => {
    setPriceValue(e.target.value)
  };

  const orderFood = (food) =>{
    setTotal(total+food.price)
    let isExisted = false;
    const result = orderFoods.map((orderFood) => {
      if (orderFood.content == food.food_name)
        {
          orderFood.quantity = orderFood.quantity+1;
          orderFood.total = orderFood.total + food.price;
          isExisted = true;
        }
    });

    if (!isExisted){
      let f = {
        content: food.food_name,
        quantity: 1,
        total: food.price
      }
      setOrderFoods([...orderFoods,f])
    }
    else {
      setOrderFoods([...orderFoods])
    }
  }

  const orderNewFood =() =>{
    let result ="Thập cẩm "
    mainFood.map((food, index)=>{
      if(foodsChosen[index])
        result += food.food_name+", "
    })
    if (result == "Thập cẩm "){
      message.warning('This is a warning message');
    }
    else {
      result = result.slice(0,result.length-2)
      result += " vị " + getTasteName(tasteValue)
      orderFood({
        food_name: result,
        price: (priceValue==0)?priceValueMore:priceValue
      })
    }

    foodsChosen.fill(false)
    setFoodsChosen([...foodsChosen])
    
  }

  const getTasteName =(taste) =>{
    if (taste==1){
      return ("Lắc lư")
    }
    else if(taste==2){
      return("Muối ớt")
    }
    else{
      return ("Mè rang")
    }
  }
  const selectDBFood = (food_name, price) =>{

    console.log(food_name, price)
    const content = food_name + " vị "+getTasteName(tasteValue)
    console.log(content)
    orderFood({
      food_name: content,
      price: price
    })
  }

  useEffect(() => {
    
    getFoodsByType("snack")
    .then(res=>{
      setSnackFood(res.data)
    })
    .catch(err => console.log(err))
    
    getFoodsByType('main')
    .then(res=>{
      setMainFood(res.data)
      setFoodsChosen(Array(res.data.length).fill(false))
    })
    .catch(err => console.log(err))

  }, [])

  return(
    <Row>
      <Col span={24}>
        <InputAutoComplete onChange={setCusName} placeholder="Tên" data={customersName} style={{width: 200, marginRight: 15}}/>
        <InputAutoComplete onChange={setCusPhone} placeholder="Số Điện Thoại" data={customersPhone} style={{width: 200, marginRight: 15}}/>
      </Col>
      <Col span={24} style={{marginTop: 15}}>
        <Input placeholder = "Số nhà, Phường, ..." style={{width: 250, marginRight: 15}}></Input>
        <InputAutoComplete onChange={setAddStreet} type="streets" placeholder="Đường" data={streets} style={{width: 200, marginRight: 15}}/>
        <InputAutoComplete onChange={setAddDistrict} type="districts" placeholder="Quận" data={districts} style={{width: 150, marginRight: 15}}/>
        <InputAutoComplete onChange={setAddCity} type="cities" placeholder="Tỉnh/ Thành Phố" data={cities} style={{width: 150, marginRight: 15}}/>
      </Col>
      <Col span={12}>
        <List
          style={{minHeight:300, marginTop: 15}}
          header={<div style={{fontWeight: 'bold'}}>Đơn hàng</div>}
          itemLayout="horizontal"
          bordered
          dataSource={orderFoods}
          renderItem={item => (
            
              <Row style={{ margin: 10}}>
                <Col span={24}>
                <div
                style={{fontWeight: 'bold'}}
                >{item.content}</div>
                </Col>
                <Col span={12}>
                  <div>Số lượng: {item.quantity}</div>
                </Col>
                <Col span={12}>
                  <div>Số tiền:{item.total} 000 VNĐ</div>
                </Col>
                <hr/>
              </Row>
              
          )}
        />
        <div>
          <Input placeholder = "Ghi chú thêm" style={{minHeight: 80, marginTop: 15}}></Input>
        </div>
      </Col>
      <Col span={12} style={{marginTop: 15}}>
        <Row style={{marginLeft: 10}}>
          <Col span={18}>
              <Col span={24}>
                <div style={{fontWeight: 'bold'}}> Món ăn</div>
              </Col>
              <Button className="add-food-btn" onClick={()=>selectDBFood("Đặc biệt 100k", 100)}>Đặc biệt 100k</Button>
              <Button className="add-food-btn" onClick={()=>selectDBFood("Đặc biệt 150k", 150)}>Đặc biệt 150k</Button>
              <Button className="add-food-btn" onClick={()=>selectDBFood("Đặc biệt 200k", 200)}>Đặc biệt 200k</Button>
              <Button 
                type="primary" 
                className="add-food-btn"
                onClick={()=> setVisible(true)}
                >
                  Món khác
              </Button>
            </Col>
          <Col span={5} offset={1}>
              <Col style={{fontWeight: 'bold'}} span={24}>Vị</Col>
              <Radio.Group onChange={onChangeTaste} value={tasteValue}>
                <Radio style={radioStyle} value={1}>
                  Lắc lư
                </Radio>
                <Radio style={radioStyle} value={2}>
                  Muối ớt
                </Radio>
                <Radio style={radioStyle} value={3}>
                  Mè rang
                </Radio>
              </Radio.Group>
            </Col>
          <div style={{marginTop: 10, fontWeight: 'bold'}}>Món ăn vặt</div>
          <Col span={24} >
            {snackFood.map((food, index)=>(
              <Button key={index} className="add-food-btn" onClick={()=>{orderFood(food)}}>{food.food_name}</Button>
            ))}
            
          </Col>
        </Row>
        <Divider/>
        <Row style={{marginLeft: 10}}>
          <Col span={5} >
            Tổng Đơn Hàng
          </Col>
          <Col span={10} offset={1} >
            <div style={{fontWeight: 'bold'}}>{total} 000 VNĐ</div>
          </Col>
          <Col span = {8}>
            <Button 
              type="primary"
              onClick={()=>{
                dispatch(addOrder(orderFoods, note, total, {name: cusName, phone: cusPhone}))
                setTotal(0)
              }}
            ><PlusOutlined/>Thêm Đơn Hàng</Button>
          </Col>
        </Row>
      </Col>
      
      <Drawer
        width={350}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Divider orientation="left">Vị</Divider>
        <Radio.Group onChange={onChangeTaste} value={tasteValue}>
          <Radio value={1}>
            Lắc lư
          </Radio>
          <Radio value={2}>
            Muối ớt
          </Radio>
          <Radio value={3}>
            Mè rang
          </Radio>
        </Radio.Group>
        <Divider orientation="left">Món</Divider>
        <Row>
          {mainFood.map((food, index)=> 
            <Col span={12}>
              <Checkbox checked={foodsChosen[index]} key={index} onChange={(e)=>onSelectMainFoods(index, e.target.checked)}>{food.food_name}</Checkbox>
            </Col>
          )}
        </Row>    
        <Divider orientation="left">Giá</Divider>
        <Radio.Group onChange={onChangePrice} value={priceValue}>
          <Radio value={50}>
            50k
          </Radio>
          <Radio value={100}>
            100k
          </Radio>
          <Radio value={150}>
            150k
          </Radio>
          <Radio value={200}>
            200k
          </Radio>
          <Radio style={radioStyle} value={0}>
            More...
            {priceValue === 0 ? <Input 
                                  onChange={(e)=>setPriceValueMore(e.target.value)}
                                  style={{ width: 100, marginLeft: 10}}/> 
                              : null}
          </Radio>
        </Radio.Group>
        <Divider/>
        <Button type="primary" onClick={orderNewFood}><PlusOutlined/>Thêm món</Button>
      </Drawer>
    </Row>
  )
}

export default AddNewOrder