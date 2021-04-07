import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { Button, Radio } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Header() {
  const isLoginned = localStorage.getItem("token") == ('undefined') ? false : true;
  return (
    <>
      <div>
        {/* <div className="loader">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}
        {/* Main navigation */}
        <nav className="navbar">
          <div className="navbar-container">
            {/* Logo */}
            <NavLink to="/" className="navbar-brand">
              Chan Ga Lac Lu
            </NavLink>
            {/* Checkout & profile */}
            {isLoginned ? (
              <div className="button-nav">
                                
                <NavLink
                  to="profile"
                >
                  <Button type="primary" shape="round" size='medium'>
                    Profile
                  </Button>
                </NavLink>

                <NavLink
                  to="auth/logout"
                >
                  <Button type="primary" shape="round" icon={<UserOutlined />} size='medium'>
                    Logout
                  </Button>
                </NavLink>
              </div>
            ) : (
              <div className="button-nav">
                <NavLink
                  to="auth/login"
                >
                  <Button type="primary" shape="round" icon={<UserOutlined />} size='medium'>
                    Login
                  </Button>
                </NavLink>
              </div>
            )}
          </div>
        </nav>
        {/* Breadcrumbs */}
      </div>
    </>
  );
}

export default Header;
