import React, { useEffect, useState } from 'react'
import './infoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../../components/ProfileModal/ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '../../Api/UserRequest.js';
import { logout } from '../../Actions/AuthAction';

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    const profileUserId = params.id;

    const [profileUser, setProfileUser] = useState({});
    const { user } = useSelector((state) => state.authReducer.authData);

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user);
            }
            else {
                const profileUser = await UserApi.getUser(profileUserId);
                setProfileUser(profileUser);
            }
        }
        fetchProfileUser();
    }, [user]);

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className='info-card'>
            <div className='info-head'>
                <h4>Profile info</h4>
                {user._id === profileUserId
                    ? (
                        <div>
                            <UilPen
                                width="2rem"
                                heigth="1.2rem"
                                onClick={() => setModalOpened(true)} />
                            <ProfileModal
                                modalOpened={modalOpened}
                                setModalOpened={setModalOpened} 
                                data={user}/>
                        </div>
                    ) : (
                        ("")
                    )}
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>{profileUser.relationship}</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>{profileUser.livesin}</span>
            </div>

            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>{profileUser.worksAt}</span>
            </div>

            <button className="button logout-button" onClick={handleLogout}>Logout</button>

        </div>
    )
}

export default InfoCard