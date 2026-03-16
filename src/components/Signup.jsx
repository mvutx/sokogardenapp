import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// type rafce
const Signup = () => {
  // initialize the hooks
  const [username, setUsernme] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");

  // define the three states an application will  move to
  const[loading, setLoading] =useState("");
  const[success, setSuccess] = useState("");
  const[error, setError] = useState("");

  //below is a function that will handle thesubmit action
const handleSubmit =async (e) =>{
  // below we prevent our site from reloading
  e.preventDefault()

  // update our loading hook with a messagethat will be displayed to the users who are trying to regster
  setLoading("Please wait as registration is in  progress...")

  try{
    // create a form data object that will enable you capture the four details entered on the form 
    const formdata =new FormData()
    // insert the four details interm of key value pairs
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", Password);
    formdata.append("phone", Phone)
    // by use of axios , we can access the method post 
    const response =await axios.post("https://kivuti.alwaysdata.net/api/signup", formdata)

    // set back the loading to default
    setLoading("");

    // JUST INCASE EVERYTHING GOES ON WELL UPDATE THE SUCCES HOOK WITH A MESSAGE 
    setSuccess(response.data.message)

    //clear your hooks 
    setUsernme("");
    setEmail("");
    setPassword("");
    setPhone("");

     setTimeout(() => {
    setSuccess("");
  }, 5000);
  // creates a time out for the page to be default after 5 secs

  }
  catch(error){
    // set the loading hook back to default 
    setLoading("");

    // update the error hook with the message given back from the response
    setError(error.message)
  }
}



  return (
    <div className='row justify-content-center mt-4'>
      <div className='card col-md-6 shadow p-4'>

        <h1 className='text-warning'>Sign Up</h1>

        <h5 className="text-warning">{loading}</h5>

        <h3 className='text-success'>{success}</h3>

        <h4 className='text-danger'>{error}</h4>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter the username'
          className='form-control' value={username}
          onChange={(e) => setUsernme(e.target.value)} required/> <br />

          {/*username*/}

          <input type="email"
          placeholder='Enter the email address'
          className='form-control'
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required/> <br />
          {/*email*/}


          <input type="Password" 
          placeholder='Enter password'
          className='form-control' value={Password} 
          onChange={(e) => setPassword(e.target.value)} 
          required/> <br />
          {/*Password*/}


          <input type="tel"
          placeholder='Enter the mobile phone number'
          className='form-control' value={Phone}
          onChange={(e) => setPhone(e.target.value)} 
          required/> <br />
          {/*Phone*/}

          <input type="submit" value="Signup" className='btn btn-primary' /> <br /> <br />

          <p className='Last'> Already have an account? <Link to={'/signin'}>Sign in</Link></p>
        </form>
      </div>
    </div> 
  )
}

export default Signup;
// research on axios in reactjs