import {LockOutlined, LoginOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input, message} from 'antd';
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {login, clearAuthMessage} from '../../../stores/auth'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';


function LoginPage(props) {
  let [form] = Form.useForm();
  let history = useHistory();

  const [loading, setLoading] = useState(false);

  let handleSubmit = (data) => {
    const form ={ ...data}
    props.login({
      form,
      onSuccess: (model) => {
        message.success(`Welcome, ${model.user.fullName}!`);
        history.push("/")
      },
      onFailure: (error) => {
        console.error(error);
      }
    })
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
      <h1 style={{marginLeft: 10}}>Đăng nhập</h1>
      <Form {...layout} onFinish={handleSubmit} className="login-form" form={form}>
        <Form.Item label="Tên đăng nhập" name="username" rules={[{required: true, message: '(*) Vui lòng nhập tên đăng nhập !'}]}>
          <Input prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Tên đăng nhập"/>
        </Form.Item>
        <Form.Item label="Mật khẩu" name="password" rules={[{required: true, message: '(*) Vui lòng nhập mật khẩu !'}]}>
          <Input
            prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
            type="password"
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <Form.Item {...tailLayout} className="portal-button">
          <div >Chưa có tài khoản? <Link to="/register">Đăng ký</Link></div>
        </Form.Item>
        <p style={{color: 'red'}}>{props.message}</p>
        <Form.Item {...tailLayout} className="portal-button">
          <Button type="primary" htmlType="submit" className="login-form-button" icon={<LoginOutlined/>}
                  loading={props.loading}>
            Đăng nhập
          </Button>
        </Form.Item>

      </Form>
  
    </>
  );
}

const mapState = (state) => ({
  // loading: state.auth.loading,
  // message: state.auth.message,
});
const mapDispatch = dispatch => bindActionCreators({
  login,
  clearAuthMessage
}, dispatch)
export default withRouter(connect(mapState, mapDispatch)(LoginPage));
