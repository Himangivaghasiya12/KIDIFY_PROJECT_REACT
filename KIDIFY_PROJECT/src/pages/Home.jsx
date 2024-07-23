import React from 'react'
// import Home from './src/assets/home_1.webp'



const Home = () => {

  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };


  return (
    <section className='container m-14 '>

      {/* // section-1 */}

      <section className=''>

        <div className='  h-[710px] w-[1400px] bg-[url(./src/assets/home_1.webp)] bg-no-repeat bg-purple-200'>
          <div className=''>
            <img src='./src/assets/home_sale.webp' className='absolute ml-[80%]  mt-10 ' />
            <h1 className=" absolute text-3xl font-medium neutral-900 title-line  ml-[53%] mt-60  ">Winter</h1>
            {/* <p className='border-2 border-purple-400 w-40 '></p> */}
            <h1 className='absolute '> sales off</h1>
          </div>
        </div>

      </section >

     {/* section-2 */}

     {/* <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div> */}

       {/* section-3 */}

      <section className='mt-20 container'>

        <div className=' '>
            <p className="font-xl p-2 w-52 bg-purple-500 rounded-3xl text-center m-auto">
              <span className="text-2xl text-white">NEW IN STORE</span>
            </p>
            <div className=' btn text-xl text-center space-x-16 mt-10   '>
              <button className='girl'>Girls' Clothing</button>
              <button>Boys' Clothing</button>
              <button>Accessories</button>
              
            </div>
           
        </div>
     

      </section>

    </section>

  )
}

export default Home