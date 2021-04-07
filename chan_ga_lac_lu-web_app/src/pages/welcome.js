import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {loginAction} from '../action/authAction'
import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 9,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 9,
  },
  
};

const Welcome = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Hãy nhập vào tên đăng nhập!',
          },
        ]}
      >
        <Input onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Hãy nhập vào mật khẩu!',
          },
        ]}
      >
        <Input.Password onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item {...tailLayout} style={{alignContent: 'space-between'}} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
        
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{width: 150}}
            onClick={()=>{dispatch(loginAction)}}
        >
          Submit
        </Button>
        
        
      </Form.Item>
      <Form.Item {...tailLayout}>
        <a href={`localhost:8000/user/auth/facebook`} style={{width: '100%'}}>
            <Button type="primary" htmlType="submit" style={{width: 150}}>
                Login with FB
            </Button>
        </a>
      </Form.Item>
    </Form>
  );
};

export default Welcome