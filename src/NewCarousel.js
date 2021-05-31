import React from 'react';
import SwiperCore, { Navigation, EffectFade, Pagination, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import "swiper/components/effect-fade/effect-fade.min.css"
SwiperCore.use([Navigation, EffectFade, Pagination,]);

  export default class NewCarousel extends React.Component {
    //need to add something to evaluate the value of the blurb for each slide, if the blurb is empty, 
    //then we don't display the blurb.
    
    displaySlides = () => { 
      const currentObjSlidesArr = this.props.currentObj.carousel;
      return currentObjSlidesArr.map((obj) => <SwiperSlide key={obj.key}>
        <img alt={"need to add text here"} src={obj.slide}/>
        <div className="slideBlurb">{obj.blurb}</div></SwiperSlide>);
    }

    render() {

        return (
          <Swiper key={this.props.currentObj.projNUM}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }} 
          >

          {/* <SwiperSlide key={this.props.currentObj.carousel[0].key}><img alt={"need to add text here"} src={this.props.currentObj.carousel[0].slide}/>
          <div className="slideBlurb">{this.props.currentObj.carousel[0].blurb}</div></SwiperSlide>
          <SwiperSlide key={this.props.currentObj.carousel[1].key}><img alt={"need to add text here"} src={this.props.currentObj.carousel[1].slide}/>
          <div className="slideBlurb">{this.props.currentObj.carousel[1].blurb}</div></SwiperSlide>
          <SwiperSlide key={this.props.currentObj.carousel[2].key}><img alt={"need to add text here"} src={this.props.currentObj.carousel[2].slide}/>
          <div className="slideBlurb">{this.props.currentObj.carousel[2].blurb}</div></SwiperSlide> */}

          {this.displaySlides()}
        </Swiper>
        );
    }
}



// displaySlides = () => { 
//   const currentObjSlidesArr = this.props.currentObj.carousel;
//   return currentObjSlidesArr.map((obj) => <SwiperSlide key={obj.key}><img alt={"need to add text here"} src={obj.slide}/><div className="slideBlurb">{obj.blurb}</div></SwiperSlide>
// }

// //in the render
// <div className="">
// {this.displaySlides()}
// </div>


