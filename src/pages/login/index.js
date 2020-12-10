import React, { useState } from 'react';
import './index.css';
import { setCookie } from '../../utils/cookie';
import { auth } from '../../services';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoginLoading, setLoginLoading] = useState(false);

  const onSubmitLogin = () => {
    setLoginLoading(true);
    auth
      .login(username, password)
      .then((res) => {
        const cookieToken = res.token;
        // const cookieUser = res.data.user;
        // setCookie('userData', JSON.stringify(cookieUser), 10000);
        setCookie('token', JSON.stringify(cookieToken), 10000);
        window.location.replace('/product');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
    // console.log(username,password);
  };

  return (
    <div className="global-container">
      <div className="card login-form shadow p-3">
        <div className="card-body">
          <h3 className="card-title text-center">Log in to DTI Task</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitLogin();
            }}
          >
            <div className="form-group">
              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We never share your username with anyone else.
                </small>
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="username">
                Password:
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We never share your Password with anyone else.
                </small>
              </label>
            </div>
            <button
              type="submit"
              value="submit"
              className="btn btn-primary btn-block mt-2 mb-2"
              disabled={isLoginLoading}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
    // <div className="loginPage">
    //   <h2> Login Page</h2>
    //   <form
    //     className="login_form"
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       onSubmitLogin();
    //     }}
    //   >
    //     <label htmlFor="username">
    //       Username :
    //       <input
    //         type="text"
    //         value={username}
    //         onChange={(e) => {
    //           setUsername(e.target.value);
    //         }}
    //       />
    //     </label>
    //     <label htmlFor="password">
    //       Password :
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => {
    //           setPassword(e.target.value);
    //         }}
    //       />
    //     </label>
    //     <input type="submit" value="Submit" disabled={isLoginLoading} />
    //   </form>
    // </div>
  );
};

export default Login;
