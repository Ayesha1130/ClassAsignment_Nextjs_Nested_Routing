import React from 'react'
import customM from "../components/customM.module.css";


const Contact = () => {
  return (
    <div className={customM.mContainer2}>
      <h1 className={customM.titleM}>Contact Us</h1>
      <p className={customM.paraM}>Email: 123@example.com</p>
      <p className={customM.paraM}>Phone: (123) 456-7890</p>
      <p className={customM.paraM}>Address: 123 Main St, City, State, ZIP</p>
      <p className={customM.paraM}>Hours: Monday-Friday 9am-5pm</p>
      <p className={customM.paraM}>Feel free to reach out to us at our email address or phone number.</p>


      
    </div>
  )
}

export default Contact



