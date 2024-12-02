
import React from 'react'

const HeaderBox = ({type='title', subtext, title, user}: HeaderBoxProps ) => {
  return (
    <div className='header-box'>
        <h1 className='header-box-title' ></h1>
        {title}
        {type === 'greeting' && (
            <span className='text-bankGradient ' >
             {user}
            </span>
        )}
        <p className='header-box-subtext' >{subtext}</p>
    </div>
  )
}

export default HeaderBox