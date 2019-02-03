import React, { Component } from 'react'

export default class CartColumns extends Component {
  render() {
    return (
      <div className='container-fluid text-center text-center d-none d-lg-block'>
        <div className='row'>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Item</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Product Name</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Price</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Quantity</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Remove</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Total</p>
          </div>
        </div>
      </div>
    )
  }
}
