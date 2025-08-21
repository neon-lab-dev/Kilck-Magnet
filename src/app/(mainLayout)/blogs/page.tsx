import BlogsSection from '@/components/Blogs/BlogsSection'
import PageHero from '@/components/Reusable/PageHero/PageHero'
import FAQ from '@/components/Shared/FAQ/FAQ'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageHero title="The Blogs" description="Create, innovate, and grow with us." />
    <BlogsSection/>
    <FAQ/>
    </div>
  )
}

export default page