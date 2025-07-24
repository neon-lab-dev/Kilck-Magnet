import BlogsCards from '@/components/Blogs/BlogsCards'
import React from 'react'

const page = () => {
  return (
    <div>
     <div className="grid grid-cols-4 gap-16">
        <BlogsCards/>
        <BlogsCards/>
        <BlogsCards/>
     </div>
    </div>
  )
}

export default page