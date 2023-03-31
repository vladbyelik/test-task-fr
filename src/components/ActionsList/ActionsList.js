import React from 'react';

import ICONS from '../../assets/icons';
import { mooji, slack, teams } from '../../assets/img';
import classModifier from '../../utils/classModifier';

import './ActionsList.scss';
import Toggle from '../Toggle/Toggle';

const ActionsList = () => {
  return (
    <ul className='actions-list'>
      <li className='actions-list__list-item'>
        <div className='actions-list__item-content'>
          <div className='actions-list__img-wrapper'>
            <ICONS.at color='#E3A137'/>
          </div>
          <div className='actions-list__text-wrapper'>
            <h5 className='actions-list__item-title'>Email</h5>
            <span className='actions-list__action'>
              ghalia@mooji.io
            </span>
          </div>
        </div>

        <Toggle />
      </li>

      <li className='actions-list__list-item'>
        <div className='actions-list__item-content'>
          <div className='actions-list__img-wrapper'>
            <img className={classModifier('actions-list__img', 'teams')} src={teams} alt="teams" />
          </div>
          <div className='actions-list__text-wrapper'>
            <h5 className='actions-list__item-title'>Microsoft Teams</h5>
            <a href='#' className={classModifier('actions-list__action', 'link')}>
              View app
            </a>
          </div>
        </div>

        <Toggle />
      </li>

      <li className='actions-list__list-item'>
        <div className='actions-list__item-content'>
          <div className='actions-list__img-wrapper'>
            <img className={classModifier('actions-list__img', 'slack')} src={slack} alt="slack" />
          </div>
          <div className='actions-list__text-wrapper'>
            <h5 className='actions-list__item-title'>Slack</h5>
            <a href='#' className={classModifier('actions-list__action', 'link')}>
              View app
            </a>
          </div>
        </div>

        <Toggle />
      </li>

      <li className='actions-list__list-item'>
        <div className='actions-list__item-content'>
          <div className='actions-list__img-wrapper'>
            <img className={classModifier('actions-list__img', 'mooji')} src={mooji} alt="mooji" />
          </div>
          <div className='actions-list__text-wrapper'>
            <h5 className='actions-list__item-title'>Mooji App</h5>
            <a href='#' className={classModifier('actions-list__action', 'link')}>
              View app
            </a>
          </div>
        </div>

        <Toggle />
      </li>
    </ul>
  )
}

export default ActionsList;