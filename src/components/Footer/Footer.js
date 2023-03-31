import React from 'react';

import ICONS from '../../assets/icons';
import classModifier from '../../utils/classModifier';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <button className={classModifier('footer__btn', 'out')}>
        Sign out
        <ICONS.arrowOut className={classModifier('footer__btn-icon', 'out')}/>
      </button>

      <button className={classModifier('footer__btn', 'comment')}>
        <ICONS.comment className={classModifier('footer__btn-icon', 'comment')}/>
      </button>
    </footer>
  )
}

export default Footer;