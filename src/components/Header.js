import React from "react";
import style from "../styles/Header.module.css";

function Header() {
  return (
    <div className={style.outer}>
      <div className={style.headerInner}>
        <div className={style.headerLeft}>
          <img src="/assets/logo.svg" alt="" className={style.headerImage} />
        </div>
        <div className={style.headerMiddle}>
          <p className={style.headeroption1}>Home</p>
          <p className={style.headeroption2}>Categories</p>
          <p className={style.headeroption3}>Raise Startup Funds</p>
          <p className={style.headeroption4}>Investors</p>
        </div>
        <div className={style.headerRight}>
          <p className={style.account}>Don't have an account?</p>
          <button className={style.headerButton}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
