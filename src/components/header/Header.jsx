import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Header = () => {
    
    const { total } = useSelector((state) => state.cartReducer);

  return (
    <header>
        <nav className="navbar navbar-expand-md">
                <NavLink className="navbar-brand d-flex align-items-center" to="">
                    <img src="../img/image 3.png" alt="..." />
                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <i className="fa-solid fa-bars" />
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link-cart nav-flex nav-big" to="search" aria-current="page">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                Search
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link-cart nav-flex nav-semi" to="carts" aria-current="page">
                                <img src="../img/cart.png" alt="..." />({total})
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="login" aria-current="page">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="register" aria-current="page">
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="nav">
                <NavLink className="nav-link-2 is-active" to="home" aria-current="page">
                    Home
                </NavLink>
                <NavLink className="nav-link-2" to="">
                    Men
                </NavLink>
                <NavLink className="nav-link-2" to="">
                    Women
                </NavLink>
                <NavLink className="nav-link-2" to="">
                    Kid
                </NavLink>
                <NavLink className="nav-link-2" to="">
                    Sport
                </NavLink>
            </nav>
    </header>
  )
}

export default Header