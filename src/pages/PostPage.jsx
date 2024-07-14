import React from 'react'
import Layout from '../component/layout/Layout'
import Postdescription from '../component/HomePage/Postdescription'
import ProfileBox from '../component/HomePage/ProfileBox'

const PostPage = () => {
  return (
    <Layout children1={<Postdescription/>} children2={<ProfileBox/>}/>
  )
}

export default PostPage