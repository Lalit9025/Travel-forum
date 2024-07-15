// import React from 'react'
// import styles from './Center_component.module.css'
// import { IoIosTimer } from "react-icons/io";
// import PostBox from './PostBox';

// const Center_component = () => {
//   return (
//     <div className={styles.center_main}>
//       <div className={styles.center_categories}>
//         <div className={styles.categories_element}><IoIosTimer/> New</div>
//         <div className={styles.categories_element}><IoIosTimer/> Top</div>
//         <div className={styles.categories_element}><IoIosTimer/> Hot</div>
//         <div className={styles.categories_element}><IoIosTimer/> closed</div>
//       </div>
//       <div className={styles.posts}>
//         <PostBox/>
//         <PostBox/>
//       </div>
//     </div>
//   )
// }

// export default Center_component
import React, { useState } from 'react';
import styles from './Center_component.module.css';
import { IoIosTimer } from "react-icons/io";
import PostBox from './PostBox';
import Postdescription from './Postdescription';
import { useNavigate } from 'react-router-dom';

const Center_component = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const handlePostClick = () => {
    navigate('/post');
  };

  return (
    <div className={styles.center_main}>
      <div className={styles.center_categories}>
        <div
          className={`${styles.categories_element} ${selectedCategory === 'New' ? styles.selected : ''}`}
          onClick={() => handleCategoryClick('New')}
        >
          <IoIosTimer /> New
        </div>
        <div
          className={`${styles.categories_element} ${selectedCategory === 'Top' ? styles.selected : ''}`}
          onClick={() => handleCategoryClick('Top')}
        >
          <IoIosTimer /> Top
        </div>
        <div
          className={`${styles.categories_element} ${selectedCategory === 'Hot' ? styles.selected : ''}`}
          onClick={() => handleCategoryClick('Hot')}
        >
          <IoIosTimer /> Hot
        </div>
        <div
          className={`${styles.categories_element} ${selectedCategory === 'Closed' ? styles.selected : ''}`}
          onClick={() => handleCategoryClick('Closed')}
        >
          <IoIosTimer /> Closed
        </div>
      </div>
      <div className={styles.posts}>
        <PostBox onClick={handlePostClick} />
        <PostBox onClick={handlePostClick} />
        <PostBox onClick={handlePostClick}/>
        <PostBox onClick={handlePostClick}/>
        {/* <Postdescription/> */}
      </div>
    </div>
  );
};

export default Center_component;
