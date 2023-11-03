import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({cartItems}) => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/log">Log </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/barChart">BarChart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/prac">Prac</Link>
                    </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/konva">Konva</Link>
                    </li> 
                     <li className="nav-item">
                        <Link className="nav-link" to="/todo">Todo</Link>
                    </li> 
                     <li className="nav-item">
                        <Link className="nav-link" to="/count">Count</Link>
                    </li> 
                     <li className="nav-item">
                        <Link className="nav-link" to="/productListing">ProductListing</Link>
                    </li> 
                     <li className="nav-item">
                        <Link className="nav-link" to="/lineChart">LineChart</Link>
                    </li> 
                     <li className="nav-item">
                        <h4 >Cart Items : {cartItems}</h4>
                    </li> 
                </ul>
            </div>
        </nav>
    )
}

export default Nav;