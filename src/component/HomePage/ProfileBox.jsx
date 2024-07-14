import React from 'react'
import styles from './ProfileBox.module.css'
import userimage from '../../assets/Ava.png'
import { SlBadge } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from 'react-icons/lu';

const ProfileBox = () => {
  return (
    <div className={styles.profilebox_main}>
        <div className={styles.user_img}>
            <img src={userimage} alt="userimage" className={styles.user_image} />
        </div>
        <div className={styles.user_name}>@Rita</div>
        <div className={styles.user_rank}><SlBadge/> 125 [8]</div>
        <div className={styles.user_socialmedia}>
            <FaInstagram/>
            <LuFacebook />
        </div>
    </div>
  )
}

export default ProfileBox