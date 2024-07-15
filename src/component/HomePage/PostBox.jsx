import React from 'react'
import styles from './PostBox.module.css'
import profileimage from '../../assets/Ava.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

const PostBox = ({onClick }) => {
  return (
    <div className={styles.posts_main} onClick={onClick}>
        <div className={styles.profile_box}>
            <div className={styles.profile_box_left}>
                <img src={profileimage} className={styles.user_image}/>
                <div className={styles.name_time}>
                    <div className={styles.name}>Rita</div>
                    <div className={styles.time}>5 min ago</div>
                </div>
            </div>
            <div className={styles.profile_box_right}><BsThreeDotsVertical/></div>
        </div>
        <div className={styles.question_answer}>
            <div className={styles.question}>What are some under rated place in Manali?</div>
            <div className={styles.answer}>I am travelling to Manali and looking for under rated, less crowd place</div>
        </div>
        <div className={styles.bottom_icons}>
            <div className={styles.bottom_left}>
                <div className={styles.bottom_left_element}>Manali</div>
                <div className={styles.bottom_left_element}>Manali</div>
                <div className={styles.bottom_left_element}>Manali</div>
            </div>
            <div className={styles.bottom_right}>
                <div className={styles.bottom_right_element}><FiEye color='#808080'/>125</div>
                <div className={styles.bottom_right_element}><MdOutlineChatBubbleOutline color='#808080'/>15</div>
                <div className={styles.bottom_right_element}><FaArrowUp color='#808080'/>20</div>
            </div>
        </div>
    </div>
  )
}

export default PostBox