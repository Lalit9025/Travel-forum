import React from 'react'
import styles from './Postdescription.module.css'
import profileimage from '../../assets/Ava.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { MdKeyboardDoubleArrowUp, MdOutlineChatBubbleOutline } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { BiDislike, BiLike } from 'react-icons/bi';
import { PiArrowBendDownRight } from 'react-icons/pi';

const Postdescription = () => {
  return (
    <div className={styles.main_div}>
        <div className={styles.posts_main}>
        <div className={styles.profile_box}>
            <div className={styles.profile_box_left}>
                <img src={profileimage} className={styles.user_image}/>
                <div className={styles.name_time}>
                    <div className={styles.name}>@Rita</div>
                    <div className={styles.time}>5 min ago</div>
                </div>
            </div>
            <div className={styles.profile_box_right}><BsThreeDotsVertical/></div>
        </div>
        <div className={styles.question_answer}>
            <div className={styles.question}>What are some under rated place in Manali?</div>
            <div className={styles.answer}>We are spending three nights each in Shimla Manali and Dharamshala in February 25. I am seeking recommendations for an English speaking driver and guide to do transfers and site seeing, safety and comfort are our priorities as a couple from Australia in our late 60s.
            Any other advice most welcome.</div>
        </div>
        <div className={styles.bottom_icons}>
            <div className={styles.bottom_left}>
                <div className={styles.bottom_left_element}>Manali</div>
                <div className={styles.bottom_left_element}>Manali</div>
                <div className={styles.bottom_left_element}>Manali</div>
            </div>
            <div className={styles.bottom_right}>
                <div className={styles.bottom_right_element}><FaArrowUp/>vote</div>
            </div>
        </div>
    </div>
    <div className={styles.suggestions}>Suggestions</div>
    <div className={styles.comment_box}>
        <input type="text" placeholder='Type here your wise suggestion' className={styles.comment_input}/>
        <div className={styles.comment_btns}>
            <div className={styles.comment_suggest}> <MdOutlineChatBubbleOutline className={styles.register_icon} size={16}/>Suggest</div>
            <div className={styles.comment_cancel}>Cancel</div>
        </div>
    </div>
    <div className={styles.comment_list}>
        <div className={styles.comment}>
            <div className={styles.profile_box}>
                <div className={styles.profile_box_left}>
                    <img src={profileimage} className={styles.user_image}/>
                    <div className={styles.name_time}>
                        <div className={styles.name}>@Rita</div>
                        <div className={styles.time}>5 min ago</div>
                    </div>
                </div>
                <div className={styles.profile_box_right}><BsThreeDotsVertical/></div>
            </div>
            <div className={styles.comment_text}>
                We are spending three nights each in Shimla Manali and Dharamshala in February 25. I am seeking recommendations for an English speaking driver and guide to do transfers and site seeing, safety and comfort are our priorities as a couple from Australia in our late 60s.
                Any other advice most welcome.
            </div>
            <div className={styles.bottom_icons}>
                <div className={styles.bottom_left_icon}>
                    <div className={styles.like}><BiLike/> 12</div>
                    <div className={styles.like}><BiDislike /> 3</div>
                </div>
                <div className={styles.bottom_right}>
                    <div className={styles.bottom_hidereplies}><MdKeyboardDoubleArrowUp />Hide All Replies (2)</div>
                    <div className={styles.bottom_hidereplies}><PiArrowBendDownRight/>Reply</div>
               </div>
        </div>

        </div>
    </div>
    </div>
  )
}

export default Postdescription