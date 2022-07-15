import React from 'react'
import React, { Component } from "react";
import "./home.css";

function HOME() {
  return (
    <div className='mainContainer'>home

<div className='navigation'>
                <div className ='navigation-logo'>
                    <img id = "img-logo" src={Logo} alt="logo" />
                </div>
                <div  className ='list' >
                    <h3>Home</h3>
                </div>
                <div className ='list' >
                    <h3>Booking</h3>
                </div>
                <div  className ='list' >
                    <h3>My Account</h3>
                </div>
                <div  className ='list'  >
                    <h3>Admin</h3>
                </div>
                <div  className ='list'  >
                    <h3 className='button1' id='button1' >Log In</h3>
                </div>
                <div  className ='list'  >
                    <h3 className='button2' id='button2'>Sign Up</h3>
                </div>
        </div>

    </div>
  )
}

export default HOME