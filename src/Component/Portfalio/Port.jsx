import React, { Component } from 'react'
import styless from './Port.module.css';
import img1 from '../../image/img1.jfif'
import img2 from '../../image/img2.jpg'
import img6 from '../../image/img6.jpg'
import img7 from '../../image/img7.jpg'
import m1 from '../../image/m1.jpg'
import m2 from '../../image/m2.jpg'
export default class Port extends Component {
  state={
    show:false,
    items:[
      {title:'this first portfile',imgg:img1},
      {title:'this secand portfile',imgg:img2},
      {title:'this third portfile',imgg:img6},
      {title:'this fourth portfile',imgg:img7},
      {title:'this fifth portfile',imgg:m1},
      {title:'this sixth portfile',imgg:m2}
    ],
    x:0
  }
  showshow=(i)=>{
    let show=! this.state.show;
    this.setState({show});
    let x=i;
    this.setState({x});
  }
  closescreen=()=>{
    let show=! this.state.show;
    this.setState({show});
  }
  render() {
    return (
    <>
    <h1 className={`d-flex justify-content-center py-5 ${styless.colorr}`}>Portfilo</h1>
   <div className={`row `}>
  <div className="col-md-4">
    <div className="card mx-5" style={{width: '400px'}}>
      <img className="card-img-top " src={img1} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="btn btn-primary" type="submit" onClick={()=>this.showshow(0)}>Show</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card mx-5" style={{width: '400px'}}>
      <img className="card-img-top" src={img2} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="btn btn-primary" type="submit" onClick={()=>this.showshow(1)}>Show</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card mx-5 " style={{width: '400px'}}>
      <img className="card-img-top" src={img6} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the </p>
        <button class="btn btn-primary" type="submit" onClick={()=>this.showshow(2)}>Show</button>
      </div>
    </div>
  </div>
  
  <div className="col-md-4">
    <div className="card m-5" style={{width: '400px'}}>
      <img className="card-img-top" src={img7} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the .</p>
        <button class="btn btn-primary" type="submit" onClick={()=>this.showshow(3)}>Show</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card my-5 mx-5" style={{width: '400px'}}>
      <img className="card-img-top" src={m1} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="btn btn-primary" type="submit" onClick={()=>this.showshow(4)}>Show</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card my-5 mx-5" style={{width: '400px'}}>
      <img className="card-img-top" src={m2} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="btn btn-primary" type="submit" onClick={()=>this.showshow(5)}>Show</button>
      </div>
    </div>
  </div>
  
</div>

<div className={`modal ${this.state.show? 'd-flex':'d-none'}`} tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{this.state.items[this.state.x].title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>this.closescreen()}></button>
      </div>
      <div class="modal-body">
       <img src={this.state.items[this.state.x].imgg} alt="" width={300} height={200}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>this.closescreen()}>Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
        
      </div>
    </div>
  </div>
</div>

       
      </>
    )
  }
}
