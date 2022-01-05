import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import React from "react";
import Footerr from "./Footer";
import styles from "./signin.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Signin() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.mainRec} id={styles.signin}>
          <div className={styles.txt}>
            <h2> Hive</h2>
            <p>Log in to your account</p>
          </div>
          <div className={styles.btnRw}>
            <div>
              <button>
                <span>
                  <img
                    src="https://img.icons8.com/color/50/000000/google-logo.png"
                    fontSize="small"
                    id={styles.gIcon}
                    alt="gimage"
                  />

                  {/* <GoogleIcon  /> */}
                </span>
                Log in with Google
              </button>
            </div>

            <div>
              <button>
                <span>
                  <FacebookIcon fontSize="small" id={styles.fbIcon} />
                </span>
                Log in with Facebook
              </button>
            </div>
          </div>
          <div className={styles.dRow}>
            <div className={styles.bBom}></div>
            <div>or</div>
            <div className={styles.bBom}></div>
          </div>
          <div className={styles.formContainer}>
            <form>
              <div className={styles.authInputContainer}>
                <label>Username or Email address</label> <br />
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.authInput}
                />
              </div>
              <div className={styles.authInputContainer}>
                <label>Password</label> <br />
                <input
                  type="password"
                  placeholder="*******"
                  className={styles.authInput}
                />
                <label>
                  <Link href="/Auth/forgotpassword">
                    <b>Forgot Password?</b>
                  </Link>
                </label>
              </div>
              <div>
                <button className={styles.signupBtn} id={styles.signinBtn}>
                  Log In
                </button>
              </div>
              {/* <div>
                <span></span> Creating an account means you agree with our Terms
                of Service and Privacy Policy{" "}
              </div> */}
            </form>
          </div>
        </div>
        <div className={styles.push}></div>
        <Footerr />
      </div>
    </>
  );
}