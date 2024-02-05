import { useCallback } from "react";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Basic details(seeker)" to the project
  }, []);

  return (
    <div className={styles.signIn}>
      <div className={styles.discoverAWorld}>
        Discover a world of career possibilities.
      </div>
      <div className={styles.createAnAccount}>Create an account</div>
      <div className={styles.or}>or</div>
      <div className={styles.rectangleParent}>
          <input className={styles.groupChild} placeholder="Email Address"/>
        <div className={styles.emailAddress}>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <input className={styles.groupItem} placeholder="Password" />
        <div className={styles.emailAddress}></div>
      </div>
      <div className={styles.rectangleContainer}>
        <input className={styles.groupItem} placeholder="Confirm Password" />
        <div className={styles.emailAddress}></div>
      </div>
      <img className={styles.signInChild} alt="" src="/group-16@2x.png" />
      <div className={styles.signInWrapper} onClick={onFrameContainerClick}>
        <div className={styles.signIn1}>Sign in</div>
      </div>
    </div>
  );
};

export default SignIn;
