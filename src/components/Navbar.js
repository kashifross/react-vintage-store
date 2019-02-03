
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className='navbar navbar-expand-sm navbar-light px-sm-5'>
        <Link to='/'>
          <img src={logo} alt='store' className='navbar-brand' width='90' height='90' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              Products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-cart-plus fa-fw' />
            </span>
            My Cart
          </ButtonContainer>
        </Link>
        </NavWrapper>
      </div>
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--mainWhite);
  .nav-link {
    color:var(--onyx) !important;
    font-size: 1.3rem;
  }
`;