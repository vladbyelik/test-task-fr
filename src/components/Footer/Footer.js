import React from 'react';
import ICONS from '../../assets/icons';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <button className='footer__btn footer__btn--out'>
        Sign out
        <ICONS.arrowOut className='footer__btn-icon footer__btn-icon--out'/>
      </button>

      <button className='footer__btn footer__btn--comment'>
        <ICONS.comment className='footer__btn-icon footer__btn-icon--comment'/>
      </button>
    </footer>
  )
}

export default Footer;