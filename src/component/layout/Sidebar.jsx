// import React from 'react'
// import styles from './Sidebar.module.css'
// import { FiSearch } from "react-icons/fi";
// import { MdOutlineFormatListBulleted } from "react-icons/md";
// import { FiTag } from "react-icons/fi";
// import { SlBadge } from "react-icons/sl";


// const Sidebar = () => {
//   return (
//     <div className={styles.side_bar}>
//         <div className={styles.search_box}><FiSearch className={styles.icon_class} size={18} color='#808080'/>search</div>
//         <div className={styles.menu}>
//             <div className={styles.menu_text}>MENU</div>
//             <div className={styles.menu_items}>
//             <div className={styles.element}><MdOutlineFormatListBulleted className={styles.icon_class} size={18} color='#808080'/>search</div>
//             <div className={styles.element}><FiTag className={styles.icon_class} size={18} color='#808080'/>search</div>
//             <div className={styles.element}><SlBadge className={styles.icon_class} size={18} color='#808080'/>search</div>

//             </div>
//         </div>

//     </div>
//   )
// }

// export default Sidebar
import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { FiSearch } from "react-icons/fi";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { FiTag } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.side_bar}>
      <div className={styles.search_box}>
        <FiSearch className={styles.icon_class} size={18} color='#808080' />search
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_text}>MENU</div>
        <div className={styles.menu_items}>
          {[
            { icon: MdOutlineFormatListBulleted, text: 'Questions' },
            { icon: FiTag, text: 'Tags' },
            { icon: SlBadge, text: 'Ranking' }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`${styles.element} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => handleClick(index)}
              >
                <Icon
                  className={styles.icon_class}
                  size={18}
                  color={activeIndex === index ? '#F48023' : '#808080'}
                />
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
