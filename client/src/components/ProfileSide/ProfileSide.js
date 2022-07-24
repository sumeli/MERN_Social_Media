import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import Logo from '../Logo/Logo'
import ProfileCard from '../ProfileCard/ProfileCard'
import './profileSide.css'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <Logo />
      <ProfileCard location="homepage" />
      <FollowersCard />
    </div>
  )
}

export default ProfileSide