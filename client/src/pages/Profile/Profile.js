import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import RightSide from '../../components/RightSide/RightSide'
import ProfileLeft from '../../ProfileSection/ProfileLeft/ProfileLeft'
import './profile.css'

const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft />

      <div className='profile-center'>
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>

      <RightSide />
    </div>
  )
}

export default Profile