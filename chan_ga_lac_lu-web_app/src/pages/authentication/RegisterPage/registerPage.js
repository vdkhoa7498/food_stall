import {LockOutlined, UserAddOutlined, UserOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons';
import {Button, Form, Input, Result, Select } from 'antd';
import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {register, clearAuthMessage} from '../../../stores/auth'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';

const { Option } = Select;

function RegisterPage(props) {
  let [form] = Form.useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  let handleSubmit = (data) => {
    // register(data.email, data.username, data.password, data.fullName, data.phone, data.role)
    //   .then((value) => {
    //     // message.success('Đăng kí thành công. Bạn có thể đăng nhập ngay bây giờ !');
    //     setIsSuccess(true)
    //   })
    //   .catch((error) => {
    //     form.resetFields();
    //   });
  };
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 8 },
  };
  

  return (
    <>
      <h1 style={{marginLeft: 10}}>Đăng ký tài khoản</h1>
      {(!isSuccess) ? (
      <Form {...layout} onFinish={handleSubmit} className="login-form" form={form}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên đăng nhập!',
              whitespace: false
            }
          ]}
        >
          <Input
            prefix={
              <UserOutlined
                style={{
                  color: 'rgba(0,0,0,.25)'
                }}
              />
            }
            placeholder="Tên đăng nhập"
            maxLength="30"
          />
        </Form.Item>
        <Form.Item
          label="Họ Tên"
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên đầy đủ của bạn!',
              whitespace: true
            }
          ]}
        >
          <Input
            prefix={
              <UserOutlined
                style={{
                  color: 'rgba(0,0,0,.25)'
                }}
              />
            }
            placeholder="Tên của bạn"
            maxLength="45"
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập email!',
              whitespace: false
            }
          ]}
        >
          <Input
            prefix={
              <MailOutlined 
                style={{
                  color: 'rgba(0,0,0,.25)'
                }}
              />
            }
            placeholder="Email"
            type="email"
          />
        </Form.Item>
        <Form.Item
          label="Điện thoại"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập Số điện thoại!',
              whitespace: false
            }
          ]}
        >
          <Input
            prefix={
              <PhoneOutlined 
                style={{
                  color: 'rgba(0,0,0,.25)'
                }}
              />
            }
            placeholder="Phone"
          />
        </Form.Item>
        <Form.Item
          label="Vai trò"
          name="role"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập chọn!',
              whitespace: false
            }
          ]}
        >
          <Select >
            <Option value="staff">Nhân viên</Option>
            <Option value="shipper">Shipper</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu!'
            }
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={
              <LockOutlined
                style={{
                  color: 'rgba(0,0,0,.25)'
                }}
              />
            }
            placeholder="Mật khẩu"
            maxLength="60"
          />
        </Form.Item>
        <Form.Item
          label="Xác nhận"
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu xácnhậnn!'
            },
            ({getFieldValue}) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('Mật khẩu xác nhận chưa khớp');
              }
            })
          ]}
        >
          <Input.Password
            prefix={
              <LockOutlined
                style={{
                  color: 'rgba(0,0,0,.25)'
                }}
              />
            }
            placeholder="Mật khẩu xác nhận"
          />
        </Form.Item>
        <Form.Item {...tailLayout} className="portal-button">
          <div >Đã có tài khoản? <Link to="/login">Đăng nhập</Link></div>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" icon={<UserAddOutlined/>}>
            Đăng kí
          </Button>
        </Form.Item>
      </Form>
      ) : (
        <Result
          status="success"
          title="Đăng kí thành công !"
        />
      )}
    </>
  );
}

const mapState = (state) => ({
});

const mapDispatch = dispatch => bindActionCreators({
  register,
  clearAuthMessage
}, dispatch)
export default withRouter(connect(mapState, mapDispatch)(RegisterPage));

