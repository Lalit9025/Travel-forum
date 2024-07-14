import React from 'react'
import styles from './CreatePost.module.css'
import { MdOutlineChatBubbleOutline } from 'react-icons/md'


const CreatePost = () => {
  return (
    <div className={styles.createpost_main}>
        <input type="text" className={styles.subject} placeholder='Subject' />
        <textarea typeof='text' placeholder='Type your question' className={styles.question}/>
        <div className={styles.bottom_btns}>
            <div className={styles.upload_img}>Add Image</div>
            <div className={styles.comment_btns}>
                <div className={styles.comment_suggest}> <MdOutlineChatBubbleOutline className={styles.register_icon} size={16}/>Publish</div>
                <div className={styles.comment_cancel}>Save as draft</div>
        </div>
        </div>

    </div>
  )
}

export default CreatePost