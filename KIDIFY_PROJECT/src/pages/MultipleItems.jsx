import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 6,
        slidesToScroll: 3

    };
    return (
        <div className="slider-container">
           <div className="rounded-full">

            <Slider {...settings} >
                    <div className="rounded-full">
                        <img src="./src/assets/asset 11.webp" className="rounded-full "></img>
                    </div>
                    <div className="rounded-full">
                         <img src="./src/assets/s_1.webp" className="rounded-full" ></img>
                    </div>
                    <div className="rounded-full">
                    <img src="./src/assets/s_1.webp" className="rounded-full"></img>
                    </div>
                    <div className="rounded-full">
                    <img src="./src/assets/s_1.webp" className="rounded-full" ></img>
                    </div>
                    <div className="rounded-full">
                    <img src="./src/assets/s_1.webp" className="rounded-full"></img>
                    </div>
                    <div className="rounded-full">
                    <img src="./src/assets/s_1.webp" className="rounded-full"></img>
                    </div>
                    <div className="rounded-full">
                    <img src="./src/assets/s_1.webp" className="rounded-full" ></img>
                    </div>
                    <div className="rounded-full">
                    <img src="./src/assets/s_1.webp" className="rounded-full" ></img>
                    </div>
                    <div className="rounded-full">
                    <img src="./src/assets/s_1.webp" className="rounded-full" ></img>
                    </div>  
            
            </Slider>
            </div> 
        
    </div >
  );
}

export default MultipleItems;

