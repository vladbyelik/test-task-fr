import React from 'react';
import ProfileBtn from '../ProfileBtn/ProfileBtn';
import ICONS from '../../assets/icons'

import './Profile.scss';
import ActionsList from '../ActionsList/ActionsList';

const Profile = () => {
  return (
    <div className='profile'>
      <h2 className='profile__title'>
        Profile
      </h2>

      <div className='profile__main'>
        <div className='profile__block profile__block--lg'>
          <div className='profile__top-wrapper'>
            <h3 className='profile__block-title'>
              Ghalia Alami
            </h3>

            <ProfileBtn 
              title="Reset Password" 
              icon={<ICONS.lock width={15} />}
            />
          </div>

          <div className='profile__content-wrapper'>
            <p className='profile__block-info-content'>ghalia@mooji.io</p>
            <p className='profile__block-info-content'>CEO / Executive</p>
            <p className='profile__block-info-content'>Timezone: UTC+1</p>
          </div>
        </div>

        <div className='profile__block profile__block--lg'>
          <div className='profile__top-wrapper'>
            <h3 className='profile__block-title'>
              Your Focus Areas
            </h3>

            <ProfileBtn 
              title="Change Focus Areas" 
              icon={<ICONS.pen width={10}/>}
            />
          </div>

          <div className='profile__subblock-wrapper'>
            <div className='profile__block profile__block--sm'>
              <h4 className='profile__block-subtitle'>
                Delegating Effectively
              </h4>
              <p className='profile__block-description'>
                Effective task distribution that leads to increased performance and engagement.
              </p>
            </div>

            <div className='profile__block profile__block--sm'>
              <h4 className='profile__block-subtitle'>
                Goal Setting
              </h4>
              <p className='profile__block-description'>
                The capability to define and share clear, measurable, time-bound goals.
              </p>
            </div>

            <div className='profile__block profile__block--sm'>
              <div className='profile__block-subtitle-content'>
                <h4 className='profile__block-subtitle'>
                  Add Recommended Focus Areas
                  <ICONS.stars className='profile__block-subtitle-icon' />
                </h4>
                <p className='profile__block-description'>
                  You can choose Focus Areas based on feedback from your peers.
                </p>
              </div>
              <button className='profile__block-subtitle-btn'>
                <ICONS.star className='profile__block-subtitle-btn-icon'/>
                Add
              </button>
            </div>
          </div>
        </div>

        <div className='profile__block profile__block--lg profile__block--with-bg'>
          <h3 className='profile__block-title'>
            Discover your work style
          </h3>

          <p className='profile__block-description'>
            <span>Take work style quiz and find out how you approach work, why you </span>
            <span>do things the way you do, and how you can thrive at work.</span>
          </p>

          <button className='profile__block-btn profile__block-btn--arrow-right'>
            <ICONS.arrowRight className='profile__block-btn-icon profile__block-btn-icon--arrow-right'/>
          </button>
        </div>



        <div className='profile__block profile__block--lg'>
          <h3 className='profile__block-title'>
            Actions delivery channels
          </h3>

          <p className='profile__block-description'>
            Get actions from Mooji in the places that work best for you.
          </p>
          
          <ActionsList />
        </div>

        <div className='profile__block profile__block--lg'>
          <h3 className='profile__block-title'>
            Take a break
          </h3>

          <p className='profile__block-description'>
            <span>Stop receiving actions when you are on vacation or taking days-</span>
            <span>off. It won’t affect your progress.</span>
          </p>

          <button className='profile__block-btn profile__block-btn--action'>
            Pause actions
          </button>
        </div>

        <div className='profile__block profile__block--lg'>
          <h3 className='profile__block-title'>
            Change Mooji time
          </h3>

          <p className='profile__block-description'>
            <span>Choose to receive your actions at another time. </span>
            <span>Currently: UTC+1.</span>
          </p>

          <button className='profile__block-btn profile__block-btn--action'>
            Change time
          </button>
        </div>

      </div>
    </div>
  )
}

export default Profile;