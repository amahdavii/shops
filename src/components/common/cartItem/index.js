import Image from "next/image";
import * as constants  from "src/constants";
import { BetweenRow, ColumnContainer, ColumnFitContainer, FitbetweenRow, RowContainer } from "src/styles/sharedStyle";
import ChangeCounCart from "../changeCounCart";
import { DiscountBox, DiscountPrice, MainPrice } from "../productCard/style";
import {CartItemContainer, DetailCartItem, TitleContainer} from './style'
const CartItem = () => {

   
    return (

        <CartItemContainer>
            <Image src={constants.Images.mainCategoryPage.brnj} width={80} height={80}/>
            <TitleContainer>
                <span>برنج ایرانی هاشمی دودی گیلان طبیعت 2.5 کیلوگرمی</span>
                <DetailCartItem>
                    <ColumnContainer>
                        <FitbetweenRow>
                            <DiscountBox>
                                <span>5%</span>
                            </DiscountBox>
                            <DiscountPrice>
                                12,700
                            </DiscountPrice>
                        </FitbetweenRow>
                        <RowContainer>
                            <MainPrice>
                                12,000
                            </MainPrice>
                            <span>{constants.strings.Common.currency}</span>
                        </RowContainer>
                    </ColumnContainer>
                    <ChangeCounCart/>
                </DetailCartItem>
            </TitleContainer>
        </CartItemContainer>
    );
}

export default CartItem;
