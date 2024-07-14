import React from 'react'
import styles from './LinkBox.module.css'
import { FaRegStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaLink } from "react-icons/fa6";

const LinkBox = () => {
  return (
    <div className={styles.linkbox_main}>
        <div className={styles.must_read_post}>
            <div className={styles.must_read_post_text}><FaRegStar color='#808080'size={16} fontWeight={700}/>Must-read posts</div>

            <div className={styles.mustread_points}>
                <div className={styles.must_read_element}><GoDotFill className={styles.icon} size={12}/>Please read rules before you start working on a platform</div>
                <div className={styles.must_read_element}><GoDotFill className={styles.icon} size={12}/>Vision & Strategy of Madpacker</div>
            </div>
            
        </div>
        <div className={styles.must_read_post}>
            <div className={styles.must_read_post_text}><FaLink color='#808080'size={16} fontWeight={700}/>Featured links</div>

            <div className={styles.mustread_points}>
                <div className={styles.must_read_element}><GoDotFill className={styles.icon} size={12}/>Book a stay with us!</div>
                <div className={styles.must_read_element}><GoDotFill className={styles.icon} size={12}/>Hostel Memories</div>
                <div className={styles.must_read_element}><GoDotFill className={styles.icon} size={12}/>Home</div>
            </div>
            
        </div>
    </div>
  )
}

export default LinkBox