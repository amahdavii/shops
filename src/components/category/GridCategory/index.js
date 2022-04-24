
import { GridWrapper, GridWrapperItems, ProductCatBoxFooter } from './style'
import { useEffect, useState } from 'react'
import Pagination from '../Pagination'
import ProductCard from "src/components/common/productCard";
import * as constant from 'src/constants'

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
const GridCategory=(props)=>{

    const{data,changePage}=props

 

    const[catData,setCatData]=useState(null)

    useEffect(()=>{
        if(!!data){
            setCatData(data)
        }
    },[data])

    const renderGrid=()=>(  
        !!catData   
        ?<GridWrapper>  
        {offerList.map((item,index)=>(
            <GridWrapperItems count={offerList.length} row={Math.trunc(offerList.length/4)} key={index}>
                 <ProductCard
                    image={item.image} 
                    title={item.title}                   
                />
            </GridWrapperItems>
        ))}        
        </GridWrapper>        
        :null
    )
    return(
        <>
           
            {renderGrid()}            
            
            <ProductCatBoxFooter>
                <Pagination totalPages={12} />
            </ProductCatBoxFooter>
        </>
    )
}
export default GridCategory