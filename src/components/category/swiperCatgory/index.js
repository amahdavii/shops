import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import { AbsolutNavleft, AbsolutNavRight, CategoryContainer } from "./style";
import * as constant from 'src/constants'
import CategoryCard from "../ctegoryCard";
import Image from "next/image";
import { useState } from "react";
import SwiperComponent from "src/components/common/swiperComponent";
SwiperCore.use([Navigation]);  

var categoryList=[
    {
        title:constant.strings.mainCategoryPage.milks,
        image:constant.Images.mainCategoryPage.tanagholat
    },
    {
        title:constant.strings.mainCategoryPage.drinks,
        image:constant.Images.mainCategoryPage.tanagholat
    },
    {
        title:constant.strings.mainCategoryPage.breakFast,
        image:constant.Images.mainCategoryPage.tanagholat
    },
    {
        title:constant.strings.mainCategoryPage.snacks,
        image:constant.Images.mainCategoryPage.tanagholat
    },
    {
        title:constant.strings.mainCategoryPage.protein,
        image:constant.Images.mainCategoryPage.tanagholat
    },
    {
        title:constant.strings.mainCategoryPage.vegetables,
        image:constant.Images.mainCategoryPage.tanagholat
    },
    {
        title:constant.strings.mainCategoryPage.mainProduct,
        image:constant.Images.mainCategoryPage.tanagholat
    },
    {
        title:constant.strings.mainCategoryPage.milks,
        image:constant.Images.mainCategoryPage.tanagholat
    },
    {
        title:constant.strings.mainCategoryPage.drinks,
        image:constant.Images.mainCategoryPage.tanagholat
    },
    {
        title:constant.strings.mainCategoryPage.breakFast,
        image:constant.Images.mainCategoryPage.tanagholat
    },
]

const SwiperCatgory = () => {
    const[beginning,setBeginning]=useState(true)
    const[end,setEnd]=useState(false)


    const handleSlidChange=(e)=>{
        setBeginning(e.isBeginning)
        setEnd(e.isEnd)

    }

    const renderSlider=()=>(
        categoryList.map((item,index)=>(
            <SwiperSlide key={index}>
                <CategoryCard
                image={item.image} 
                title={item.title}
                />  
            </SwiperSlide>
        ))
    )

    return (
      <CategoryContainer>
        <SwiperComponent
          name={'category'}
          space={12}
          width={'100%'}
          breakpoints={{
            300: {
              slidesPerView: 3.25,
            },
            450: {
              slidesPerView: 3.25,
            },
            600: {
              slidesPerView: 3.25,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
        >
          {renderSlider()}
        </SwiperComponent>
      </CategoryContainer>
    )
}

export default SwiperCatgory;
