import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Blog_list = () => {
  return (

    // <section className='cantainer'>
    //   <div className='cantainer '>

    //     <div class="container-fluid absolute ">
    //       <h1 className="absolute font-bold text-5xl font-serif  neutral-900 p-20">Our Blog</h1>
    //       <div className='absolute p-24 mt-8 flex'>
    //         <span className='  text-lg  text-purple-400'>Home </span>
    //         <MdKeyboardArrowRight className='text-inline' />
    //         <span className='text-lg  text-purple-400'>Blog </span>
    //         <MdKeyboardArrowRight className='text-inline' />
    //         <span className='text-lg '>Page 2 </span>
    //       </div>
    //       <img src='./src/assets/bg-blog.png' className='bg-cover bg-[#eef9ff] '></img>
    //     </div>
    //   </div>

    // </section>

    <section class="section block-shop-head block-blog-head default-banner">
    <div class="container">
        <h1 class="font-bold text-5xl  neutral-900">Our Blog</h1>
                    <div class="breadcrumbs">
                <ul><li><a href="https://kidify.themebeer.com">Home</a></li><li><a href="#">Blog</a></li><li><a href="#">Page 2</a></li></ul>            </div>
            </div>
</section>











  )
}

export default Blog_list