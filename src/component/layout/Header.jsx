import React from 'react'
import styles from './Header.module.css'
import madpackersIcon from '../../assets/icon.png'
import { MdOutlinePersonAddAlt1 } from "react-icons/md";

const Header = () => {
  return (
    <div className={styles.header_main}>
        <div className={styles.header_namebox}>
            <img className={styles.header_icon} src={madpackersIcon}/>
            <div className={styles.header_name}>Madpackers</div>
            <div className={styles.header_question}>Question</div>
        </div>
        <div className={styles.header_btns}>
            <button className={styles.register_btn}> <MdOutlinePersonAddAlt1 size={20} className={styles.register_icon}/>Register</button>
            <button className={styles.login_btn}> Login</button>
        </div>
    </div>
  )
}

export default Header