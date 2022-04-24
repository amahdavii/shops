import Image from "next/image";
import * as constants from '../../../constants'
import {BetweenRow, ColumnContainer, FitbetweenRow, RowContainer} from "src/styles/sharedStyle"
import AddToCart from "../addToCart";
import { DiscountBox, DiscountPrice, MainPrice, ProductCardContainer, ProductImage, ProductTitle } from "./style";
import Modal from "../Modal";
import ProductView from "../ProductView";
import { useState } from "react";


const ProductCard = (props) => {
    const{image,title,type}=props
    const [visible,setVisible]=useState(false)
    return(
        <>
            {type=="child"
            ?null
            :<Modal visibility={visible} hide={()=>setVisible(false)}>
                <ProductView/>
            </Modal>

            }
            <ProductCardContainer>       
              
                <ProductImage
                src={image.src} 
                onClick={()=>setVisible(true)}          
                />
                <ProductTitle onClick={()=>setVisible(true)}>
                    {title}
                </ProductTitle>
                <FitbetweenRow>
                    <BetweenRow>
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
                                <span>{constants.strings.Common.currency}</span>
                            </RowContainer>
                        </ColumnContainer>
                    </BetweenRow>
                    <AddToCart/>
                </FitbetweenRow>
            </ProductCardContainer>
        </>
    );
}

export default ProductCard;
