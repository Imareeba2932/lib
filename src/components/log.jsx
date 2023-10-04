import React from 'react'
import Swal from 'sweetalert2'
// import {motion} from "framer-motion"
import { useState } from 'react';

const Log = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // You can add your authentication logic here.
      // For this example, let's assume a successful login if both fields are filled.
      if (username !== '' && password !== '') {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome back, ' + username + '!',
          timer: 10000,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: 'Please fill in both username and password fields.',
            timer: 10000,
        });
      }
    };
  
    return (
        <div className='container'>
            <dic className="col">
                <div className="card mt-5 d-block mx-auto c">
                    <div className="card-header text-center">LOGIN</div>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                 className="form-control mb-4"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                 className="form-control mb-4"/>
                            </div>
                            <button  className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </dic>
        </div>
    );
  }
  
  export default Log;
  