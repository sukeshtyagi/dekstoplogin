import React from "react";
import style from "../styles/MidSection.module.css";

function MidSection() {
  return (
    <div className={style.container}>
      <div className={style.innerDiv}>
        <div className={style.leftDiv}>
          <img src="/assets/doc.svg" alt="" className={style.leftDivImage} />
        </div>
        <div className={style.rightDiv}>
          <div className={style.rightTop}>
            <h1 className={style.heading}>Login to your Account</h1>

            <input
              type="text"
              name=""
              id=""
              placeholder="Email Address"
              className={style.inputEmail}
            />

            <input
              type="text"
              name=""
              id=""
              placeholder="Password"
              className={style.inputPassword}
            />

            <p className={style.para}>Forgot Password?</p>

            <button className={style.button}>Login</button>
          </div>

          <div className={style.rightBtm}>
            <div className={style.segregationDiv}>
              <div className={style.segLeft}></div>
              <p className={style.segPara}>OR</p>
              <div className={style.segRight}></div>
            </div>

            <div className={style.iconDiv}>
              <div className={style.icon1}>
                <img
                  src="/assets/google.svg"
                  alt=""
                  className={style.iconImg1}
                />
              </div>

              <div className={style.icon2}>
                <img src="/assets/fb.svg" alt="" className={style.iconImg2} />
              </div>

              <div className={style.icon3}>
                <img
                  src="/assets/apple.svg"
                  alt=""
                  className={style.iconImg3}
                />
              </div>
            </div>
          </div>
          <p className={style.terms}>
            By using Decatlog, you agree to our privacy policy, and our terms
            and conditions
          </p>
        </div>
      </div>
    </div>
  );
}

export default MidSection;
