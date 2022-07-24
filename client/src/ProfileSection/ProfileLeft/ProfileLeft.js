import React from 'react'
import FollowersCard from '../../components/FollowersCard/FollowersCard'
import Logo from '../../components/Logo/Logo'
import InfoCard from '../InfoCard/InfoCard'

const ProfileLeft = () => {
    return (
        <div className='ProfileSide'>
            <Logo />
            <InfoCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileLeft