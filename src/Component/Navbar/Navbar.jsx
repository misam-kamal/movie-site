import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark b-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-uppercase" href="#">React</a>
    <button class="navbar-toggler b-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      menu <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <Link className={`nav-link active text-uppercase text-white mx-1 ${classes['nav-link']} ${classes['active']}`} aria-current="page" to="header">Home</Link>
        </li>
        <li class="nav-item">
        <Link className={`nav-link active text-uppercase text-white mx-1`} aria-current="page" to='port'>Portfolio</Link>
      
        </li>
        <li class="nav-item">
        <Link className={`nav-link active text-uppercase text-white mx-1 `} aria-current="page" to="about">About</Link>
        </li>
        <li class="nav-item">
        <a className={`nav-link active text-uppercase text-white mx-1 `} aria-current="page" href="#">Contact</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    )
  }
}
