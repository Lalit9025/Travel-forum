import React from 'react'
import Layout from '../component/layout/Layout'
import styles from './HomePage.module.css'
import Center_component from '../component/HomePage/Center_component'
import LinkBox from '../component/HomePage/LinkBox'
import ProfileBox from '../component/HomePage/ProfileBox'
import CreatePost from '../component/HomePage/CreatePost'


const HomePage = () => {
  return (
    <Layout children1={<Center_component/>} children2={<LinkBox/>}/>
  )
}

export default HomePage