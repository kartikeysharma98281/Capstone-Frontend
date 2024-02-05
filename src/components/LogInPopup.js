import { useCallback } from "react";
import styles from "./LogInPopup.module.css";

const LogInPopup = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "JOBS" to the project
  }, []);

  return (
    <div className={styles.logInPopup}>
      <div className={styles.exploreExcitingJob}>
        Explore exciting job opportunities
      </div>
      <div className={styles.welcomeBack}>Welcome back!</div>
      <div className={styles.or}>or</div>
      <div className={styles.forgotPassword} onClick={()=>{alert("Hello")}}>Forgot password ?</div>
      <div className={styles.rectangleParent}>
        <div className={styles.emailAddress}>
          <input className={styles.groupChild} placeholder="Email" />
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.emailAddress}>
        <input className={styles.groupChild} placeholder="Password" />
        </div>
      </div>
      <img className={styles.logInPopupChild} alt="" src="/group-17@2x.png" />
      <div className={styles.logInWrapper} onClick={onFrameContainerClick}>
        <div className={styles.logIn}>Log in</div>
      </div>
    </div>
  );
};

export default LogInPopup;
