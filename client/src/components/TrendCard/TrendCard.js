import React from 'react'
import { TrendData } from '../../Data/TrendData'
import './trendCard.css'

const TrendCard = () => {
    return (
        <div className='trend-card'>
            <h3>Trending right now</h3>
            {TrendData.map((trend) => {
                return (
                    <div className='trend'>
                        <span><b>#{trend.name}</b></span>
                        <span style={{ fontSize: '13px' }}>{trend.shares}k shares</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard