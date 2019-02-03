import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,  
            info,
            img, 
            price, 
            title, 
            inCart
          } = value.detailProduct;
          return (
            <div className='container py-5'>
              {/* Title */}
              <div className='row'>
                <div className='col-10 mx-auto text-center text-slanted text-darker my-5'>
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End Title */}
              {/* Product Info */}
              <div className='row'>
                <div className='col-10 mx-auto col-md-6'>
                <img src={img} className='img-fluid' alt='product' />
                </div>
                {/* Product Text */}
                <div className='col-10 mx-auto col-md-6 mt-3'>
                <h2>{title}</h2>
                <h4 className='text-darker'>
                  <strong>
                    Price: <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className='font-weight-bold mt-3 mb-0'>
                  Features:
                </p>
                <p className='text-muted'>{info}</p>
                {/* Button */}
                <div>
                  <Link to='/'>
                    <ButtonContainer>Back</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart 
                    disabled = {inCart ? true: false}
                    onClick = {() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? 'inCart' : 'add to cart'}
                  </ButtonContainer>
                </div>
              </div>
            </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
