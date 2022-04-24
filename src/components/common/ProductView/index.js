import { useEffect, useState } from 'react'
import ImageViewer from '../ImageViewer'
import * as constant from 'src/constants'
import { AddToCartTitle, DetailProductContainer, DetailProductFooter, DetailProductHeader, DetailProductOption, DetailProductTitle, ProductDetailPrice, ProductOtherContainer, ProductOtherHeader, ProductOtherProduct, ProductOtherRow, ProductViewContainer, ProductViewDetail } from './style'
import ProductCard from '../productCard'
import { ProductBoxWidget } from 'src/components/category/widgetOffer/style'
import { BetweenRow, ColumnContainer, IconBox, RowContainer } from 'src/styles/sharedStyle'
import { DiscountBox, DiscountPrice, MainPrice } from '../productCard/style'
import { AddToCartBox } from '../addToCart/style'
import SwiperComponent from '../swiperComponent'
import { SwiperSlide } from 'swiper/react'

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

const ProductView=(props)=>{
    // const{data}=props

    const[option]=useState(
        [
            { value: 2, label: 'ویرایش تعداد سفارش'},
            { value: 3, label:'حذف سفارش' },
        ]
    )

    const[select,setSelect]=useState(
        null
    )

    const[count,setCount]=useState(0)


    // useEffect(()=>{
    //     setSelect(null)
    //     if(!!data){
    //         setSelect(                
    //             { value: 1, label: `${data.quantity} عدد سفارش`},            
    //         )
    //     }
    // },[data])


    const renderOption=(title,txt)=>{
        return(
            <span>
                {title} : &nbsp;
                <DetailProductOption>{txt}</DetailProductOption>
            </span>
        )
    }


    const renderProduct=()=>(
        offerList.map((item,index)=>(    
             <SwiperSlide key={index}>
                <ProductOtherProduct>
                    <ProductCard
                    type="child"
                    image={item.image}
                    title={item.title}
                    /> 
                </ProductOtherProduct>
             </SwiperSlide>     
        ))
    )



    return(
        <ProductViewContainer>
            <ProductViewDetail>
                <ImageViewer 
                images={
                    [
                        {title:'1',img:constant.Images.mainCategoryPage.dogh},
                        {title:'2',img: constant.Images.mainCategoryPage.dogh},
                        {title:'3',img: constant.Images.mainCategoryPage.dogh},
                        {title:'4',img:constant.Images.mainCategoryPage.dogh},
                        {title:'5',img:constant.Images.mainCategoryPage.dogh}
                    ]
                }/>
                <DetailProductContainer>

                    <DetailProductHeader>
                    
                        <DetailProductTitle>{constant.strings.mainCategoryPage.products.milk}</DetailProductTitle>
                        {renderOption('برند','کوهپایه')}
                        {renderOption('نوع','موسیر')}
                        {renderOption('دسته بندی','لبنیات')}
                        {renderOption('فروشگاه','وال مارکت')}

                    </DetailProductHeader>

                    <DetailProductFooter>
                        <ProductDetailPrice>
                            <span>قیمت مصرف کننده</span>
                            <ColumnContainer>
                                <RowContainer>
                                    <DiscountBox>
                                        <span>5%</span>
                                    </DiscountBox>
                                    <DiscountPrice>
                                        12,700
                                    </DiscountPrice>
                                </RowContainer>
                                <RowContainer>
                                    <MainPrice>
                                        12,000
                                    </MainPrice>
                                    <span>{constant.strings.Common.currency}</span>
                                </RowContainer>
                            </ColumnContainer>
                        </ProductDetailPrice>
                        <BetweenRow>
                            <AddToCartBox color='#ff' background='#fff' borderColor="#dcdfe1" radius={'30px'} padingX="15px" padingY="3px">
                                <input type={"number"} value={count} onChange={(e)=>setCount(e.target.value)} min={0}/>
                                <ColumnContainer>
                                    <IconBox onClick={()=>setCount(count+1)} data-icon='5' size="20" style={{marginBottom:'-5px'}}/>
                                    <IconBox onClick={()=>count>0 ?setCount(count-1) :null} data-icon='y'  size="20"/>
                                </ColumnContainer>
                            </AddToCartBox>
                            <AddToCartBox color='#fff' background='#ed7203' radius={'30px'} padingX="15px" padingY="10px">
                                <IconBox className='icon-add_black_24dp' color="#fff" size="20"/>
                                <AddToCartTitle>افزودن به سبد خرید</AddToCartTitle>
                            </AddToCartBox>
                        </BetweenRow>
                    </DetailProductFooter>
               
                </DetailProductContainer>

            </ProductViewDetail>
            <ProductOtherContainer>
                <ProductOtherHeader>
                    <span>محصولات مشابه</span>
                </ProductOtherHeader>
                <SwiperComponent
                 name={"detailPage"}
                 space={10} 
                 width={'100%'}
                 breakpoints={
                    {    
                        450: {
                            slidesPerView: 2,
                        },
                        600: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 3.5,
                        },
                        1024:{
                            slidesPerView: 3.5,
                        },
                        1280:{
                            slidesPerView: 3.7,
                        }
                    }
                 }>
                    {renderProduct()}
                </SwiperComponent>

            </ProductOtherContainer>

        </ProductViewContainer>
        // :null
    )
}
export default ProductView