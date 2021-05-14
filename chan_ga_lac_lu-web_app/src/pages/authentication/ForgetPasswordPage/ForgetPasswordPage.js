import { UserOutlined ,UserAddOutlined} from '@ant-design/icons';
import { Form, Input, Result,Button,message} from 'antd';
import React, {useState} from 'react';
// import forgetPassService from '../../services/forgetPassService';

function ForgetPasswordPage(props) {
  let [form] = Form.useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  let handleSubmit = (data) => {
    setLoading(true)
    // forgetPassService.checkUserName(data.username)
    //   .then((res) => {
    //     setLoading(false)
    //     //console.log(res)
    //     if (res.data === false) {
    //       message.error('Vui lòng nhập đúng username');
    //     } else {
    //       setIsSuccess(true);
    //     }
    //   })
    //   .catch(() => {
    //     setLoading(false)
    //     message.error('Có lỗi xảy ra');
    //   });
  };
  return (
    (!isSuccess) ? (
      <Form onFinish={handleSubmit} className="login-form" form={form}>
        <Form.Item
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
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" icon={<UserAddOutlined/>} loading={loading} >
              Đổi mật khẩu
          </Button>
        </Form.Item>
      </Form>
    ) : (
      <Result
        status="success"
        title="Đã gửi mail cho tài khoản !"
        subTitle="Hệ thống đã gửi mail cho bạn, mời bạn kiểm tra mail để hoàn thành."
      />
    )
  );
}

export default ForgetPasswordPage;
