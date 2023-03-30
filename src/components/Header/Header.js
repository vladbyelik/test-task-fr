import React from 'react';
import ICONS from '../../assets/icons'

import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container-lg header__wrapper'>
        <h1 className='header__logo'>
          <ICONS.logo />
        </h1>

        <nav className='header__nav'>
          <menu className='header__menu'>
            <li className='header__menu-item'>
              <a href='#'>
                Home
              </a>
            </li>

            <li className='header__menu-item'>
              <a href='#'>
                My actions
              </a>
            </li>

            <li className='header__menu-item'>
              <a href='#'>
                MY surveys
              </a>
            </li>
          </menu>

          <button type='button' className='header__btn'>
            Ghalia alami
            <ICONS.user />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header;