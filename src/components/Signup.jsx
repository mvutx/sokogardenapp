// type rafce
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  // initialize the hooks
  const [username, setUsernme] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  return (
    <div className='row justify-content-center mt-4'>
      <div className='card col-md-6 shadow p-4'>
        <h1 className='text-primary'>Sign Up</h1>
        <form>
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
          {Phone}

          <input type="button" value="Signup" className='btn btn-primary' /> <br /> <br />
          Already have an account? <Link to={'/signin'}>Sign in</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup;
// research on axios in reactjs