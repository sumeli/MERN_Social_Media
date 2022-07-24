import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../Actions/UserAction';

const User = ({ person }) => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    const [following, setFollowing] = useState(person.followers.includes(user._id));
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleFollow = () => {
        following
        ? dispatch(unfollowUser(person._id, user))
        : dispatch(followUser(person._id, user));
      setFollowing((prev) => !prev);
    }
    return (
        <div className='follower'>
            <div className='follower-section'>
                <img
                    src={
                        publicFolder + person.profilePicture
                            ? publicFolder + person.profilePicture
                            : publicFolder + "defaultProfile.png"
                    }
                    alt="" className='follower-img' />
                <div className='name'>
                    <span>{person.firstname} {person.lastname}</span>
                    <span>{person.username}</span>
                </div>
            </div>
            <button className={ following ? "button fc-button UnfollowButton" : "button fc-button"} onClick={handleFollow}>
                {following ? "Unfollow" : "Follow"}
            </button>
        </div>
    )
}

export default User