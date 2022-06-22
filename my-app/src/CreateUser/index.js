import React from 'react'
import OrangeButton from '../App/Components/Button/OrangeButtonIndex'
import GreenButton from '../App/Components/Button/GreenButtonIndex'
import FormInput from '../App/Components/InputTypeText/Input-Index'

const CreateUser = () => {

  async function submitUser(){
    // console.log("This works")
    
  
  (async () => {
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({first_name: "New Person",
      last_name: "Green",
      email: "dos@hotmail.com",
      password: "password",
      house_number: "birmingham",
      street_address: "birmingham",
      town: "birmingham",
      region: "birmingham",
      postcode: "birmingham"})
    });
    const content = await response.json();
  
    console.log(content);
  })();
}
    return (
        <div>

       <header className='header'>
        <img className='our-logo' src="https://i.ibb.co/SJKYb1L/logov1-copy.png" alt="Bootcamper Social Logo"/>
        {/* <img className='profile-icon' src="https://i.ibb.co/zXrZDfm/Place-Holder-Profile-Pic.png" alt="Profile Photo or Initial Place Holder"/> */}
      </header>  
      <br></br>
      <div className='login-inputs'> 

           <h1 className="h1-styling">Create Account</h1>
           <p className="create-account-styling" >First Name:</p>
           <FormInput name="username-input" placeholder='Enter your First Name'/>
           <p className="create-account-styling" >Surname:</p>
           <FormInput name="username-input" placeholder='Enter your Surname'/>
           <p className="create-account-styling">Email Address:</p>
           <FormInput name="username-input" placeholder="Enter your Email Address" />
           <p className="create-account-styling">Password:</p>
           <FormInput name="username-input" placeholder="Enter a Password" />
           <p className="create-account-styling">Address:</p>
           <FormInput name="username-input" placeholder="House/Flat Name or Number" />
           <br></br>
           <FormInput name="username-input" placeholder="Street Address" />
           <br></br>
           <FormInput name="username-input" placeholder="Town/City"/>
           <br></br>
           <FormInput name="username-input" placeholder="Region" />
           <br></br>
           <FormInput name="username-input" placeholder="Postcode" />

           <p className="create-account-styling">Profile Picture:</p>
           <OrangeButton className="orange-button" buttonText={"Upload from your Device"}/>
           <br></br>
           <GreenButton handleClick={submitUser} className="green-button" buttonText={"Create User"} />

         </div>
        </div>
    )
}

export default CreateUser