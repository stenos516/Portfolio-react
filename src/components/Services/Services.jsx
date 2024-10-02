import React from 'react'
import './Services.css'
import Services_Data from'./services_data.js'
const Services = () => {
  return (
    <div id='services' className='services'>
    <div className='services-title'>
     <h1>My Services</h1>
    </div>
    <img src='' alt=''></img>   
      <div className='services-container'>
     {Services_Data.map((service,index)=>{
return <div key={index} className='services-format'>

 <h2>{service.s_name}</h2>
 <p>{service.s_desc}</p>
 <div className='services-readmore'>
   <p>Read More</p>
   <img src='' alt=''></img>
 </div>
</div>
     })}
      </div>
   </div>
  )
}

export default Services
