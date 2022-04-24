
import * as constants from 'src/constants'
import {useState } from 'react';
import MainLayout from 'src/layout/mainLayout'
import TitleCategory from 'src/components/category/TitleCategory'
import GridCategory from 'src/components/category/GridCategory'
import {IconBox} from 'src/styles/sharedStyle'
import{
  CatPageContainer,
  SecondRow,
  ProductCatBox,
  ProductCatBoxHeader,
  ProductCatBoxHeaderImage,
  ProductCatBoxHeaderSpan,
  ProductCatBoxHeaderSelected,
  ChildrenGrid
} from 'src/styles/category/suggestion'
import Image from 'next/image';
import CategorySugestion from '../../../components/category/categorySugestion';
const SuggestionCategoryPage=()=>{


    const[page,setPage]=useState(1)




    return(
        <MainLayout>   
            <TitleCategory title={[constants.strings.mainCategoryPage.milks]} bg={'#fff'}/>
            <CategorySugestion/>
           
            <ChildrenGrid>
                <ProductCatBox>
                    <ProductCatBoxHeader>
                        <ProductCatBoxHeaderSpan>
                            <IconBox data-icon="*" size={32}/>
                        </ProductCatBoxHeaderSpan>
                        <ProductCatBoxHeaderSpan>بیشترین درصد تخفیف </ProductCatBoxHeaderSpan>
                        <ProductCatBoxHeaderSelected>کمترین درصد تخفیف</ProductCatBoxHeaderSelected>
                        <ProductCatBoxHeaderSpan>بیشترین مبلغ تخفیف</ProductCatBoxHeaderSpan>
                        <ProductCatBoxHeaderSpan>کمترین مبلغ تخفیف</ProductCatBoxHeaderSpan>
                    </ProductCatBoxHeader>                              
                    <GridCategory data={[1,2,3]} changePage={(val)=>setPage(val)}/>                                                                                                        
                </ProductCatBox>
            </ChildrenGrid>
        </MainLayout>
    )
}
export default SuggestionCategoryPage;