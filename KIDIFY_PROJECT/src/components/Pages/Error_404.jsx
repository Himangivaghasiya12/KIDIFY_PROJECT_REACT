import React from 'react'
import { Link } from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgFacebook } from "react-icons/cg";
import { ImTwitter } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";




const Error_404 = () => {
	return (
		<sectoin className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center2 justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">


			<div className='xl:pt-24 w-full xl:w-11/12 relative pb-12 lg:pb-0'>
				<div className='h-[700px] w-11/12 bg-pink-100 relative m-auto'>
					<h1 className='text-7xl mt-72 absolute font-serif ml-16'>Page not available</h1>
					<p className='absolute mt-96 ml-16 text-xl font-medium w-96 traking-wide'>Sorry, but the page you were looking
						for could not be found.</p>
					<div class="text-md mb-30 w-96 mt-[450px] absolute ml-16">
						You can return to our <a href="http://fy.local/"><u className='text:underline'>home page</u></a>, or drop us a line
						if you can't find what you're looking for.</div>
					<div className='ml-[55%] mt-14 hover:scale-y-95'>
						<img src='./src/assets/error_404.webp'></img>
					</div>
				</div>
			</div>

			<div class="row flex justify-around  mt-20   order-4 md:flex-wrap">
				<div class="col-lg-3 col-md-6 mb-15">
					<div class="cardContact cardChat">
						<div class="cardInfo">
							<strong class="d-block mb-5 font-xl-bold">Chat to sales</strong>
							<p class="font-md w-[285px]">
								Speak to our teamcom </p>
							<a href="mailto:sales@kidify.com">sales@kidify.com</a>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 mb-15">
					<div class="cardContact cardChat">
						<div class="cardInfo">
							<strong class="d-block mb-5 font-xl-bold">Call us</strong>
							<p class="font-md  ">
								<a href="tel:+01 568 253">+01 568 253</a>
								<a href="tel:+01 568 253">+01 568 253</a>
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 mb-15">

					<strong class="d-block mb-5 font-xl-bold ">Postal mail</strong>
					<p class="font-md w-60">
						456 Park Avenue South, Apt 7B
						New York, NY 10016
					</p>

				</div>
				<div class="col-lg-3 col-md-6 mb-15">

					<strong class="d-block mb-5 font-xl-bold">Social Network</strong>
					<p class="font-md w-60">
						456 Park Avenue South, Apt 7B
						New York, NY 10016
					</p>

				</div>
			</div>

			<div class=" py-10 w-11/12 border-b border-gray-400 m-auto"></div>
			<div className=''>
				<h1 className='absolute ml-96 font-[Lobster+Two]	 '>Sing up and get up to 25% off
					your first purchase</h1>
				<img src='./src/assets/error_bg.png ' className=' bg-cover mt-24 m-auto  border-2  border-dashed border-red-500 '></img>
			</div>


			{/* <div className='flex '>
				<div>

					<h5 class="neutral-900 text-uppercase mb-30">Contact</h5>
					<p class="neutral-900 font-lg desc-company">Monday to Friday 8 a.m - 5 p.m</p>
					<p class="neutral-900 font-lg phone-footer">+01 456 789</p>
					<p class="neutral-900 font-lg phone-footer">+01 456 789</p>
					<p class="neutral-900 font-lg email-footer">contact@kidify.com</p>
				</div>


				<div class="menu-company-container"><ul id="menu-company" class="menu"><li id="menu-item-389" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-389"><a href="#">About Us</a></li>
					<li id="menu-item-390" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-390"><a href="#">Our Experts</a></li>
					<li id="menu-item-391" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-391"><a href="#">Services &amp; Price</a></li>
					<li id="menu-item-392" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-392"><a href="#">Latest news</a></li>
					<li id="menu-item-394" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-394"><a href="#">Support Center</a></li>
				</ul></div>

				<div id="nav_menu-3" class="ftwdgt-animation mb-30 widget_nav_menu" data-wow-delay=".2s"><h5 class="neutral-900 text-uppercase mb-30">Customers</h5><div class="menu-customers-container"><ul id="menu-customers" class="menu"><li id="menu-item-395" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-395"><a href="#">Contact Us</a></li>
					<li id="menu-item-396" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-396"><a href="#">Payment &amp; Tax</a></li>
					<li id="menu-item-397" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-397"><a href="#">Bonus Point</a></li>
					<li id="menu-item-398" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-398"><a href="#">Supply Chain</a></li>
					<li id="menu-item-399" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-399"><a href="#">Student Discount</a></li>
				</ul></div></div> */}

			{/* <div id="kidify_nav_menu-3" class="ftwdgt-animation mb-30 widget_kidify_nav_menu wow animate__ animate__fadeIn animated" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;"><h5 class="neutral-900 text-uppercase mb-30">Support</h5><div class="menu-support-container"><ul id="menu-support-1" class="menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-401"><a href="#">Shipping Info</a></li>
					<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-402"><a href="#">Returns</a></li>
					<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-403"><a href="#">Refund</a></li>
					<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-404"><a href="#">How To Order</a></li>
					<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-405"><a href="#">How To Track</a></li>
				</ul></div></div>

				<div id="kidify_nav_menu-4" class="ftwdgt-animation mb-30 widget_kidify_nav_menu wow animate__ animate__fadeIn animated" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeIn;"><h5 class="neutral-900 text-uppercase mb-30">Social</h5><div class="menu-social-container"><ul id="menu-social" class="menu"><li id="menu-item-408" class="facebook menu-item menu-item-type-custom menu-item-object-custom menu-item-408"><a href="#">Facebook</a></li>
					<li id="menu-item-409" class="twitter menu-item menu-item-type-custom menu-item-object-custom menu-item-409"><a href="#">Twitter</a></li>
					<li id="menu-item-410" class="instagram menu-item menu-item-type-custom menu-item-object-custom menu-item-410"><a href="#">Instagram</a></li>
					<li id="menu-item-411" class="pinterest menu-item menu-item-type-custom menu-item-object-custom menu-item-411"><a href="#">Pinterest</a></li>
					<li id="menu-item-412" class="youtube menu-item menu-item-type-custom menu-item-object-custom menu-item-412"><a href="#">Youtube</a></li>
				</ul></div></div> */}

			{/* </div> */}


			{/* <footer class="bg-white dark:bg-gray-900 ">
				<div class="container  py-12 mx-auto ">

					<div class="grid grid-cols-2 gap-40 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
						<div >
							<h3 className="text-2xl font-medium uppercase">Contect</h3>

							<div class="flex flex-col items-start mt-9 space-y-4 	">
								<h4 className="text-neutral-700 transition-colors duration-200 dark:text-gray-200 w-80 text-lg">Monday to Friday 8 a.m - 5 p.m</h4>
								<div className='flex text-neutral-700 text-lg'>
									<IoCall className='mt-1' />
									<h5 className='ml-2' >+01 456 789</h5>
								</div>
								<div className='flex text-neutral-700 text-lg'>
									<IoCall className='mt-1' />
									<h5 className='ml-2' >+01 456 789</h5>
								</div>
								<div className='flex text-neutral-700 text-lg'>
									<TfiEmail className='mt-2' />
									<h5 className='ml-3 '>contact@kidify.com</h5>
								</div>

							</div>
						</div>

						<div className='ml-'>
							<h3 className="text-2xl font-medium uppercase ">COMPANY</h3>

							<div class="flex flex-col items-start mt-9 w-80 space-y-4">
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline hover: transition hover:duration-[0.2]'>About Us</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline'>Our Experts</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline'>Services & Price</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline'>Latest news</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline'>Support Center</p>
								</div>
							</div>
						</div>

						<div className='ml-20'>
							<h3 className="text-2xl font-medium uppercase ">CUSTOMERS</h3>
							<div class="flex flex-col items-start mt-9 space-y-4 w-96">
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline hover: transition hover:duration-[0.2]'>Contact Us</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline '>Payment & Tax</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline'>Bonus Point</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline'>Supply Chain</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline'>Student Discount</p>
								</div>

							</div>
						</div> */}

			{/* <div class="menu-company-container"><ul id="menu-company" class="menu"><li id="menu-item-389" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-389"><a href="#">About Us</a></li>
<li id="menu-item-390" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-390"><a href="#">Our Experts</a></li>
<li id="menu-item-391" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-391"><a href="#">Services &amp; Price</a></li>
<li id="menu-item-392" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-392"><a href="#">Latest news</a></li>
<li id="menu-item-394" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-394"><a href="#">Support Center</a></li>
</ul></div> */}

			{/* <div className='ml-28'>
							<h3 className="text-2xl font-medium uppercase ">SUPPORT</h3>
							<div class="flex flex-col items-start mt-9 space-y-4 w-80">
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline hover: transition hover:duration-[0.2]'>Shipping Info</p>
								</div>
								<div className='flex text-lg text-neutral-700 w-80'>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline'>Returns</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline'>Refund</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline'>How To Order</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<MdKeyboardArrowRight className='mt-1' />
									<p className='ml-2 hover:underline'>How To Track</p>
								</div>
							</div>
						</div>

						<div className='ml-28'>
							<h3 className="text-2xl font-medium uppercase ">SOCIAL</h3>

							<div class="flex flex-col items-start mt-9 space-y-4 ">
								<div className='flex text-lg text-neutral-700 '>
									<CgFacebook className='mt-1' />
									<p className='ml-2 hover:underline hover: transition hover:duration-[0.2]'>Facebook</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<ImTwitter className='mt-1' />
									<p className='ml-2 hover:underline'>Twitter</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<AiOutlineInstagram className='mt-1' />
									<p className='ml-2 hover:underline'>Instagram</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<GrPinterest className='mt-1' />
									<p className='ml-2 hover:underline'>Pinterest</p>
								</div>
								<div className='flex text-lg text-neutral-700 '>
									<AiOutlineYoutube className='mt-1' />
									<p className='ml-2 hover:underline'>Youtube</p>
								</div>
							</div>
						</div>

						{/* <div class=" py-10 w-11/12 border-b border-gray-400 m-auto"></div> */}

			{/* </div>


				</div>
			</footer> */}

		</sectoin>

	)
}

export default Error_404        