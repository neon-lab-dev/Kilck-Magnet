import BlogsHero from '@/components/Blogs/BlogsHero/BlogsHero'
import BlogsSection from '@/components/Blogs/BlogsSection'
import FAQ from '@/components/Shared/FAQ/FAQ'
import React from 'react'

const page = () => {
  return (
    <div>
      <BlogsHero/>
    <BlogsSection/>
    <FAQ/>
    </div>
  )
}

export default page