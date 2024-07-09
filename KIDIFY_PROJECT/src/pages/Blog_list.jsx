import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog_list = () => {
  return (

    // <section className='cantainer'>
    //   <div className='cantainer '>

    //     <div class="container-fluid absolute  fixed">
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
    <section>

      <section className='bg-[url(./src/assets/bg-blog.png)] bg-contain  bg-right pbg-no-repeat	t-20 pb-28 mt-3 bg-[#eef9ff]'>
        <div className='container-lg'>
          <h1 className='font-bold text-5xl font-serif  neutral-900 pt-12 pl-10'>Our Blog</h1>
          <div className=' p-3 space-x-2 pl-12 '>

            {/* <Link className='' to="/"> */}
            <span className='text-purple-400 text-lg'>Home</span>
            {/* </Link> */}
            <MdKeyboardArrowRight className='inline' />
            {/* <Link className='' to="/"> */}
            <span className='text-lg text-purple-400'>Blog</span>
            {/* </Link> */}
            <MdKeyboardArrowRight className='inline' />
            {/* <Link className='' to="/"> */}
            <span className='text-lg'>Page 2</span>
            {/* </Link> */}
          </div>
        </div>
      </section>


      <section className='p-10 flex max:md:flex-wrap'>

        <section>
          <div>
            <a class="tag-up mr-10 absolute bg-purple-300 ml-[52%] mt-6 p-1 w-32 rounded-full text-center" href="https://kidify.themebeer.com/category/styling-tips/">Styling Tips</a>
            <img src='./src/assets/blog_1.webp' height="1150px" width="970px" alt='' />
          </div>
          <h1 className='text-5xl font-serif mb-8 mt-5 leading-[55px] hover:text-red-500 text-ellipsis'>
            The Rise of Gender-Neutral Fashion for Kids:
            Challenging Stereotypes
          </h1>
          <h5 className='text-sm space-x-6 mb-8  text-neutral-500'>
            <span>
              October 2, 2023
            </span>
            <span>
              2 Mins read
            </span>
            <span>
              27 views
            </span>
          </h5>
          <h2 className='text-lg font-sans landing-8 text-[#1c1d1d]'>
            If you're looking for some inspiration to dress up your child, you've come to the right place! Check out our top 10 picks for adorable outfits that will make your little fashionista stand out.
          </h2>
          <div class="mt-14 text-end mb-16 ">
            <a class="btn text-lg lending-6 text-purple-400" href="https://kidify.themebeer.com/the-rise-of-gender-neutral-fashion-for-kids-challenging-stereotypes/">
              Keep reading
              <FaArrowRightLong className='text-lg text-purple-400 inline ml-2' />
            </a>
          </div>

          <div>
            <a class="tag-up mr-10 absolute bg-purple-300 ml-[52%] mt-6 p-1 w-32 rounded-full text-center" href="https://kidify.themebeer.com/category/styling-tips/">Styling Tips</a>
            <img src='./src/assets/blog_2.webp' height="1150px" width="970px" alt='' />
          </div>
          <h1 className='text-5xl font-serif mb-8 mt-5 leading-[55px] hover:text-red-500 text-ellipsis'>
          How to Choose the Perfect Formal Outfit for Your Child
          </h1>
          <h5 className='text-sm space-x-6 mb-8  text-neutral-500'>
            <span>
              October 2, 2023
            </span>
            <span>
              2 Mins read
            </span>
            <span>
              19 views
            </span>
          </h5>
          <h2 className='text-lg font-sans landing-8 text-[#1c1d1d]'>
          If you're looking for some inspiration to dress up your child, you've come to the right place! Check out our top 10 picks for adorable outfits that will make your little fashionista stand out.
          </h2>
          <div class="mt-14 text-end mb-16 ">
            <a class="btn text-lg lending-6 text-purple-400" href="https://kidify.themebeer.com/the-rise-of-gender-neutral-fashion-for-kids-challenging-stereotypes/">
              Keep reading
              <FaArrowRightLong className='text-lg text-purple-400 inline ml-2' />
            </a>
          </div>

          <div className=''>
            <a class="tag-up mr-10 absolute bg-purple-300 ml-[52%] mt-6 p-1 w-32 rounded-full text-center" href="https://kidify.themebeer.com/category/styling-tips/">Styling Tips</a>
            <img src='./src/assets/blog_2.webp' height="1150px" width="970px" alt='' />
          </div>
          <h1 className='text-5xl font-serif mb-8 mt-5 leading-[55px] hover:text-red-500 text-ellipsis'>
          Must-Have Fashion Essentials for Your Growing Baby
          </h1>
          <h5 className='text-sm space-x-6 mb-8  text-neutral-500'>
            <span>
              October 2, 2023
            </span>
            <span>
              2 Mins read
            </span>
            <span>
              18 views
            </span>
          </h5>
          <h2 className='text-lg font-sans landing-8 text-[#1c1d1d]'>
          If you're looking for some inspiration to dress up your child, you've come to the right place! Check out our top 10 picks for adorable outfits that will make your little fashionista stand out.
          </h2>
          <div class="mt-14 text-end mb-16">
            <a class="btn text-lg lending-6 text-purple-400" href="https://kidify.themebeer.com/the-rise-of-gender-neutral-fashion-for-kids-challenging-stereotypes/">
              Keep reading
              <FaArrowRightLong className='text-lg text-purple-400 inline ml-2' />
            </a>
          </div>

          <div>
            <a class="tag-up mr-10 absolute bg-purple-300 ml-[52%] mt-6 p-1 w-32 rounded-full text-center" href="https://kidify.themebeer.com/category/styling-tips/">Styling Tips</a>
            <img src='./src/assets/blog_3.webp' height="1150px" width="970px" alt='' />
          </div>
          <h1 className='text-5xl font-serif mb-8 mt-5 leading-[55px] hover:text-red-500 text-ellipsis'>
          How Gender-Neutral Fashion Promotes Inclusivity and Diversity in Childhood
          </h1>
          <h5 className='text-sm space-x-6 mb-8  text-neutral-500'>
            <span>
              October 2, 2023
            </span>
            <span>
              2 Mins read
            </span>
            <span>
              19 views
            </span>
          </h5>
          <h2 className='text-lg font-sans landing-8 text-[#1c1d1d]'>
            If you're looking for some inspiration to dress up your child, you've come to the right place! Check out our top 10 picks for adorable outfits that will make your little fashionista stand out.
          </h2> 
          <div class="mt-14 text-end mb-16">
            <a class="btn text-lg lending-6 text-purple-400" href="https://kidify.themebeer.com/the-rise-of-gender-neutral-fashion-for-kids-challenging-stereotypes/">
              Keep reading
              <FaArrowRightLong className='text-lg text-purple-400 inline ml-2' />
            </a>
          </div>

          <div>
            <a class="tag-up mr-10 absolute bg-purple-300 ml-[52%] mt-6 p-1 w-32 rounded-full text-center" href="https://kidify.themebeer.com/category/styling-tips/">Styling Tips</a>
            <img src='./src/assets/blog_4.webp' height="1150px" width="970px" alt='' />
          </div>
          <h1 className='text-5xl font-serif mb-8 mt-5 leading-[55px] hover:text-red-500 text-ellipsis'>
          The Impact of Gender-Neutral Fashion on Children’s Self-Expression
          </h1>
          <h5 className='text-sm space-x-6 mb-8  text-neutral-500'>
            <span>
              October 2, 2023
            </span>
            <span>
              2 Mins read
            </span>
            <span>
              18 views
            </span>
          </h5>
          <h2 className='text-lg font-sans landing-8 text-[#1c1d1d]'>
            If you're looking for some inspiration to dress up your child, you've come to the right place! Check out our top 10 picks for adorable outfits that will make your little fashionista stand out.
          </h2>
          <div class="mt-14 text-end mb-16 ">
            <a class="btn text-lg lending-6 text-purple-400" href="https://kidify.themebeer.com/the-rise-of-gender-neutral-fashion-for-kids-challenging-stereotypes/">
              Keep reading
              <FaArrowRightLong className='text-lg text-purple-400 inline ml-2' />
            </a>
          </div>


        </section>

        <section>
          <div id="" class="border-1 border-solid shadow-lg shadow-gray-300 ml-24   ">
            <h5 class="font-serif text-3xl mb-[28px] border-b-2 border-gray-500 border-solid pb-[10px]">Categories</h5>
            <ul>
              <li className="text-xl line-clamp-4 "><a href="https://kidify.themebeer.com/category/best-deals-online/">Best Deals Online
                <span className= "h-40 w-40 bg-gray-500 ml-72  ">5</span></a>
              </li>
              <li class="cat-item cat-item-60"><a href="https://kidify.themebeer.com/category/fashion-trends/">Fashion Trends<span class="number-item">4</span></a>
              </li>
              <li class="cat-item cat-item-63"><a href="https://kidify.themebeer.com/category/favorite-brands/">Favorite Brands<span class="number-item">4</span></a>
              </li>
              <li class="cat-item cat-item-61"><a href="https://kidify.themebeer.com/category/kids-outfits/">Kids' Outfits<span class="number-item">4</span></a>
              </li>
              <li class="cat-item cat-item-62 flex justify-between">
                <div>Style Tips</div>
                <div class="h-8 w-6 bg-gray-300 flex justify-center items-center rounded-t-md rounded-b-md text-[16px]"><span class="">5</span></div>
              </li>
            </ul>

          </div>
        </section>
      </section>



    </section>















  )
}

export default Blog_list