import React, { useCallback, useState } from "react";
import styles from "./SignIn.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [values, setValues] = useState({
    email : "",
    password : "",
    confirm_password : ""
  })
 
  const onFrameContainerClick= ()=>{
    navigate('/basic-details-seeker')
  }

  const navigate = useNavigate();


  const handleSignIn =  async (req, res) => {
    // console.log(values);
    console.log("from values" ,values);
    try {
    const response = await axios.post('http://localhost:5000/signup', values);
    console.log("from client" ,response);

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.signIn}>
      <div className={styles.discoverAWorld}> 
        Discover a world of career possibilities.
      </div>
      <div className={styles.createAnAccount}>Create an account</div>
      <div className={styles.or}>or</div>
      <div className={styles.rectangleParent}>
        <input
          className={styles.groupChild}
          placeholder="Email Address"
          value={values.email}
          onChange={e => setValues({...values, email: e.target.value})}
        />
        <div className={styles.emailAddress}></div>
      </div>
      <div className={styles.rectangleGroup}>
        <input
          className={styles.groupItem}
          placeholder="Password"
          type="password"
          value={values.password}
          onChange={e => setValues({...values, password: e.target.value})}
        />
        <div className={styles.emailAddress}></div>
      </div>
      <div className={styles.rectangleContainer}>
        <input
          className={styles.groupItem}
          placeholder="Confirm Password"
          type="password"
          value={values.confirm_password}
          onChange={e => setValues({...values, confirm_password: e.target.value})}
        />
        <div className={styles.emailAddress}></div>
      </div>
      <img className={styles.signInChild} alt="" src="/group-16@2x.png" />
      <div className={styles.signInWrapper} onClick={onFrameContainerClick} >
        <button onClick={handleSignIn} className={styles.signIn1}>
          Sign in
        </button>
      </div>
    </div>
  ); 
};

export default SignIn;
