import React, { Component } from 'react'
import styles from './Header.module.css';
import man from '../../image/man.png'

export default class Header extends Component {
  render() {
    return (
      <>
      <header className={`${styles.header}`}>
        <div className='container'>
            <div className={`${styles['header-img']}`}>
                <img src={man} alt='' className='w-100'/>
            </div>
            <div className={`${styles[`header-contant`]}`}>
                <h1>REACT WEB SITE</h1>
                <div className="line"><i className="fa-solid fa-star"></i></div>
                <p>Graphic Artist - web Designer - Illustrator</p>
            </div>
        </div>
      </header>
      
      
      
      </>
    )
  }
}
