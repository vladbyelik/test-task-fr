import React from 'react';
import ICONS from '../../assets/icons';
import Toggle from '../Toggle/Toggle';
import './ActionsList.scss';

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
            <ICONS.people />
          </div>
          <div className='actions-list__text-wrapper'>
            <h5 className='actions-list__item-title'>Microsoft Teams</h5>
            <a href='#' className='actions-list__action actions-list__action--link'>
              View app
            </a>
          </div>
        </div>

        <Toggle />
      </li>

      <li className='actions-list__list-item'>
        <div className='actions-list__item-content'>
          <div className='actions-list__img-wrapper'>
            <ICONS.slack /> 
          </div>
          <div className='actions-list__text-wrapper'>
            <h5 className='actions-list__item-title'>Slack</h5>
            <a href='#' className='actions-list__action actions-list__action--link'>
              View app
            </a>
          </div>
        </div>

        <Toggle />
      </li>

      <li className='actions-list__list-item'>
        <div className='actions-list__item-content'>
          <div className='actions-list__img-wrapper'>
            <ICONS.circles />
          </div>
          <div className='actions-list__text-wrapper'>
            <h5 className='actions-list__item-title'>Mooji App</h5>
            <a href='#' className='actions-list__action actions-list__action--link'>
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