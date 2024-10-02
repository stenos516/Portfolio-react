import React from 'react'
import './MyWork.css'
import mywork_data from './mywork_data'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
     <div className='mywork-title'>
        <h1>My Works</h1></div> 
        <img src='' alt=''></img>
        <div className='mywork-container'>
            {mywork_data.map((work, index)=>{
               return <img key={index} src={work.w_img} alt=''></img> 
            })}
        </div>
        
    </div>

  )
}

export default MyWork
