// import React from 'react'
// import { Helmet } from 'react-helmet'
// import Header from './Header'
// import { Toaster } from 'react-hot-toast'
// import styles from './Layout.module.css'
// import Sidebar from './Sidebar'

// const Layout = ({description,keywords,author,title,children1, children2}) => {
//   return (
//     <div>
//        <Helmet>
//           <meta charSet="UTF-8" />
//           <meta name="description" content={description} />
//           <meta name="keywords" content={keywords} />
//           <meta name="author" content={author} />
//           <title>{title}</title>
//        </Helmet>
//         <Header/>
//         <main className={styles.main_content}>
//           <Toaster/>
//           <div className={styles.side_bar}><Sidebar/></div>
//           <div className={styles.children_components}>
//             <div className={styles.children_component1}>{children1}</div>
//             <div className={styles.children_component2}>{children2}</div>
//           </div>
        
           
//         </main>
//     </div>
//   )
// }
// Layout.defaultProps = {
//   title:"Ecommerce app - shop now",
//   description:"mern stack project",
//   keywords:"mern, react, node, mongodb",
//   author:"lalit",
// }

// export default Layout
import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import { Toaster } from 'react-hot-toast'
import styles from './Layout.module.css'
import Sidebar from './Sidebar'

const Layout = ({description,keywords,author,title,children1, children2}) => {
  return (
    <div>
       <Helmet>
          <meta charSet="UTF-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
       </Helmet>
        <Header/>
        <main className={styles.main_content}>
          <Toaster/>
          <div className={styles.grid_container}>
            <div className={styles.side_bar}><Sidebar /></div>
            <div className={styles.children_component1}>{children1}</div>
            <div className={styles.children_component2}>{children2}</div>
          </div>
        </main>
    </div>
  )
}
Layout.defaultProps = {
  title:"Ecommerce app - shop now",
  description:"mern stack project",
  keywords:"mern, react, node, mongodb",
  author:"lalit",
}

export default Layout