// import React, { useCallback, useState } from 'react
import './authentication.css'
import logo from '../image/so.png';
import { useState } from 'react';



function Authentication() {

  const[isSignup,setisSignup]= useState(false);

  const [data,setData] = useState(
    {firstname:"",
     lastname:"",
     username:"",
     password:"",
     confirmpass:""
    })

    const onHandleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
      // console.log({ ...data, [e.target.name]: e.target.value });
    }
    const [validPassword,setValidPassword] = useState(true)

 

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (isSignup) {
        if (data.password !== data.confirmpass) {
          setValidPassword(false);
        } else {
          setValidPassword(true);
    
          try {
            const response = await fetch('http://localhost:5000/auth/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
    
            if (response.ok) {
              // Signup successful, you can redirect or perform other actions
              console.log('Signup successful');
            } else {
              // Signup failed, handle the error
              console.error('Signup failed');
            }
          } catch (error) {
            console.error('Error during signup:', error);
          }
    
          // Reset the form
          setData({
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            confirmpass: '',
          });
        }
      } else {
        // Handle login similarly with the /api/login endpoint
        // Use the data object for login credentials
        try {
          const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (response.ok) {
            // Login successful, you can redirect or perform other actions
            console.log('Login successful');
          } else if(response.status === 404) {
            // Login failed, handle the error
            console.error("User never Exist please signup");
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
    
        // Reset the form
        setData({
          firstname: '',
          lastname: '',
          username: '',
          password: '',
          confirmpass: '',
        });
      }
    };
    
    const resetForm =()=>{

      setValidPassword(true);
      setData( {firstname:"",
      lastname:"",
      username:"",
      password:"",
      confirmpass:""
     });
    }
   
  
  return (
    <>
    <div className="authentication">
       <div  className='aut-2'>
        <div className="aut-logo">
            <img src={logo}></img>
        </div>
        <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{isSignup ? "Sign up" : "login"}</h3>


        {isSignup &&(  <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            onChange = {onHandleChange}
            value= {data.firstname}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            onChange = {onHandleChange}
            value = {data.lastname}
          />
        </div>) }


        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
            onChange = {onHandleChange}
            value = {data.username}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
            onChange = {onHandleChange}
            value = {data.password}
          />

          {isSignup &&( <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange = {onHandleChange}
            value = {data.confirmpass}
          />)}
        
        </div>
             <span  style = {{display: validPassword ? "none":"block"}}>Confirm password is not same</span>
            

        <div className='line'>
            <span onClick={()=>{setisSignup((prev)=>!prev); resetForm()}} 
            style={{fontSize: '1vw',
                    textDecoration:'dotted',
                  
                    
                    
                    
                    }}>{isSignup ? "Already have an account" : "Dont have an account|Signup!"}</span>
        </div>
        
        <button className="button infoButton" type="submit">{isSignup?"Sign up":"login"}</button>
      </form>
    </div>
        {/* <LogIn></LogIn> */}

        


        </div> 

    </div>
    
    </>
  )
}


export default Authentication