import React, { Component } from 'react'
import styless from './About.module.css';
import aboutt from '../../image/aboutt.png'

export default class About extends Component {
  render() {
    return (
   <>
   <div className='b-primary w-110'>
    <p className={`d-flex justify-content-center text-white ${styless.colorr}`}>About Us</p>
    <div className="line"><i className="fa-solid fa-star"></i></div>
    <br/>
    <div className={`d-flex justify-content-center ${styless.para}`}>
      <p>Lorem ipsum dolor sit, amet consec misam aya hi misam mmisam kamal mousa<br/>
      Lorem ipsum dolor sit, amet consec misam aya hi misam mmisam kamal mousa<br/>
      Lorem ipsum dolor sit, amet consec misam aya hi misam mmisam kamal mousa<br/>
      Lorem ipsum dolor sit, amet consec misam aya hi misam mmisam kamal mousa<br/>
      Lorem ipsum dolor sit, amet consec misam aya hi misam mmisam kamal mousa<br/>
      <div className="line"><i className="fa-solid fa-star"></i></div>
</p>
    </div>
   </div>
   </>
    )
  }
}
