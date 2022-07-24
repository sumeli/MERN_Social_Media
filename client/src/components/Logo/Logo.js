import React from 'react'
import './logo.css'
import Logo1 from '../../img/logo1.png'
import {UilSearch} from '@iconscout/react-unicons'

const Logo = () => {
  return (
    <div className='logoSearch'>
        <img src={Logo1} alt="" />
        <div className='search'>
            <input type="text" placeholder='#Explore' />
            <div className='search-icon'>
                <UilSearch />
            </div>
        </div>
    </div>
  )
}

export default Logo