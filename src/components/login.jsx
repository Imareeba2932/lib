import React from 'react'
import Swal from 'sweetalert2'
import { motion } from "framer-motion"
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // You can add your authentication logic here.
        // For this example, let's assume a successful login if both fields are filled.
        if (username !== '' && password !== '') {
            Swal.fire({
                icon: 'success',
                title: 'Login Successful!',
                text: 'Welcome back, ' + username + '!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed!',
                text: 'Please fill in both username and password fields.',
            });
        }
    };

    return (
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className='container'>
            <motion.h2 style={{fontSize: '10px', rotate: 0}} animate={{ fontSize: '50px', color: '#ff2994' }} transition={{duration: 1}} className='text-center'>
                Login to your Account
            </motion.h2>
            <div className="col">
                <div className="card mt-5 d-block mx-auto c">
                    <div className="card-header text-center">LOGIN</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="form-control mb-4" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="text"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control mb-4" />
                            </div>
                            <button onClick={handleLogin} className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div> 
    );
}

export default Login;
