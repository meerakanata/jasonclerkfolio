import React from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import "swiper/components/effect-fade/effect-fade.min.css"
SwiperCore.use([ Autoplay,Pagination,]);

  export default class FeatCarousel extends React.Component {
    //need to add something to evaluate the value of the blurb for each slide, if the blurb is empty, 
    //then we don't display the blurb.
    
    displayFeatSlides = () => { 
      const currentObjSlidesArr = this.props.currentObjArr;
      const ImagesToShowArr  = [];
        currentObjSlidesArr.forEach(element => {
            if(element.image !== " "){
                ImagesToShowArr.push(element);
            }
            return ImagesToShowArr;
        });
        return ImagesToShowArr.map((obj) => <SwiperSlide key={obj.id}>
        <img alt={"need to add text here"} src={obj.image}/>
        </SwiperSlide>);
    }

    render() {

        return (
          <Swiper autoplay={{
            "delay": 3000,
            "disableOnInteraction": true
          }}
            key={this.props.currentObjArr.id}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }} 
          >
          {this.displayFeatSlides()}
        </Swiper>
        );
    }
}

