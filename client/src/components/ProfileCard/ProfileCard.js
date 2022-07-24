import React from 'react'
import './profilecard.css'
// import Cover from '../../img/cover.jpg'
// import Profile from '../../img/profileImg.jpg'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfileCard = ({ location }) => {

  const { user } = useSelector((state) => state.authReducer.authData)
  const posts = useSelector((state) => state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className='profileCard'>
      <div className='profile-images'>
        <img src={
          user.coverPicture
            ? serverPublic + user.coverPicture
            : serverPublic + "defaultCover.jpg"
        } alt="CoverImage" />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="ProfileImage"
        />
      </div>

      <div className='profile-name'>
        <span>{user.firstname} {user.lastname}</span>
        <span>
          {user.worksAt ? user.worksAt : "Write About Yourself"}
        </span>
      </div>

      <div className='follow-status'>
        <hr />
        <div className='follow-section'>
          <div className='follow'>
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className='vertical-line'></div>
          <div className='follow'>
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>

          {location === "profilePage" && (
            <>
              <div className='vertical-line'></div>
              <div className='follow'>
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}

        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span className='my-profile'>
          <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }} >My Profile</Link>
        </span>
      )}
    </div>
  )
}

export default ProfileCard