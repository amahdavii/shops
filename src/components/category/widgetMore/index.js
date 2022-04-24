import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import { MoreBox, MoreIcon, ProductBoxWidgetMore, WidgetBoxMore, WidgetTitle } from "./style";
import * as constant from '../../../constants'
import * as constants from "src/constants";
import SwiperComponent from "../../common/swiperComponent";
import ProductCard from "src/components/common/productCard";
import { BetweenRow, FitbetweenRow, IconBox } from "src/styles/sharedStyle";
SwiperCore.use([Navigation]);  

var offerList=[
    {
        title:constant.strings.mainCategoryPage.products.sos,
        image:constant.Images.mainCategoryPage.sos
    },
    {
        title:constant.strings.mainCategoryPage.products.brnj,
        image:constant.Images.mainCategoryPage.brnj
    },
    {
        title:constant.strings.mainCategoryPage.products.dogh,
        image:constant.Images.mainCategoryPage.dogh
    },
    {
        title:constant.strings.mainCategoryPage.products.milk,
        image:constant.Images.mainCategoryPage.shir
    },
    
    {
        title:constant.strings.mainCategoryPage.products.zeyton,
        image:constant.Images.mainCategoryPage.protein
    },
    {
        title:constant.strings.mainCategoryPage.products.sos,
        image:constant.Images.mainCategoryPage.sos
    },
    {
        title:constant.strings.mainCategoryPage.products.brnj,
        image:constant.Images.mainCategoryPage.brnj
    },
    {
        title:constant.strings.mainCategoryPage.products.dogh,
        image:constant.Images.mainCategoryPage.dogh
    },
    {
        title:constant.strings.mainCategoryPage.products.milk,
        image:constant.Images.mainCategoryPage.shir
    },
    
    {
        title:constant.strings.mainCategoryPage.products.zeyton,
        image:constant.Images.mainCategoryPage.protein
    },
]

const WidgetMore = (props) => {
  

    const renderSlider=()=>(
        offerList.map((item,index)=>(
            <SwiperSlide key={index}>
                <ProductBoxWidgetMore style={{'borderLeftWidth':index+1==offerList.length ?'0px' :"2px"}}>
                    <ProductCard
                    image={item.image} 
                    title={item.title}                   
                    />  
                </ProductBoxWidgetMore>
            </SwiperSlide>
        ))
    )

    return (        
        <WidgetBoxMore>
            <FitbetweenRow>
                <WidgetTitle>{props.name}</WidgetTitle>
                <MoreBox>
                    <BetweenRow>
                        <MoreIcon>{constant.strings.Common.showMore}</MoreIcon>
                        <IconBox size={24} data-icon="J" color={constants.Colors.orangeDark}/>
                        {/* <Image src={constant.Icons.arrowLeft} height={15} width={8}/> */}
                    </BetweenRow>
                </MoreBox>
            </FitbetweenRow>
            <SwiperComponent 
            name={props.name}
            space={0} 
            width={'100%'}
            breakpoints={
                {    
                    450: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    768: {
                    slidesPerView: 3,
                    },
                    1024:{
                    slidesPerView: 5.5,
                    }
                }
            }
            >
                {renderSlider()}
            </SwiperComponent>
        </WidgetBoxMore>
    );
}

export default WidgetMore;
