import React from 'react'
import CreatePost from '../component/HomePage/CreatePost'
import LinkBox from '../component/HomePage/LinkBox'
import Layout from '../component/layout/Layout'

const CreatePostPage = () => {
  return (
    <Layout children1={<CreatePost/>} children2={<LinkBox/>}/>

  )
}

export default CreatePostPage