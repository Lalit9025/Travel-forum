import React from 'react'
import styles from './Header.module.css'
import madpackersIcon from '../../assets/icon.png'
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosNotificationsOutline } from "react-icons/io";
import { clearAuthData } from '../../hooks/authSlice';
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user)

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    // Clear user data from Redux store
    dispatch(clearAuthData());
    // Clear user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Redirect to login page
    navigate('/login');
  };
  return (
    <div className={styles.header_main}>
        <div className={styles.header_namebox}>
            <img className={styles.header_icon} src={madpackersIcon}/>
            <div className={styles.header_name}>Madpackers</div>
            <div className={styles.header_question}>Question</div>
        </div>
        <div className={styles.header_btns}>
            {/* <button className={styles.register_btn} onClick={handleLoginClick}> <MdOutlinePersonAddAlt1 size={20} className={styles.register_icon}/>Register</button>
            <button className={styles.login_btn} onClick={handleLoginClick}> Login</button> */}
            {user.name ? (
          <>
            <button className={styles.register_btn} onClick={()=> navigate('/createpost')}>
              <MdOutlinePersonAddAlt1 size={20} className={styles.register_icon} />Ask a question
            </button>
            <button class={styles.button24} role="button" onClick={handleLogoutClick}>Logout</button>

            <IoIosNotificationsOutline className={styles.notificatins} size={30} color='#808080' />
            <img src={user.picture} className={styles.user_dp}/>
          </>
        ) : (
          <>
            <button className={styles.register_btn} onClick={handleLoginClick}>
              <MdOutlinePersonAddAlt1 size={20} className={styles.register_icon} />Register
            </button>
            
            <button className={styles.login_btn} onClick={handleLoginClick}>Login</button>
          </>
        )}
        </div>
    </div>
  )
}

export default Header