import { CartCheckoutContainer, CartCheckoutDiscountPrice } from "./style";
import * as constants  from "src/constants";

import { BetweenRow, BoldSpan, CenterFullContainer, ColumnCenterFitContainer, ColumnFitContainer, IconBox, RowContainer } from '@/src/styles/sharedStyle';
import {
    CartItemContainer, DetailCartItem, TitleContainer
} from '../../common/cartItem/style'
import { DiscountBox, DiscountPrice, MainPrice } from "../../common/productCard/style";
import ChangeCounCart from "../../common/changeCounCart";

import Image from "next/image";

const CartCheckout = () => {

    const renderCartItem=()=>(
        <CartItemContainer>
            <Image src={constants.Images.mainCategoryPage.brnj} width={80} height={80}/>
            <TitleContainer>
                <span>برنج ایرانی هاشمی دودی گیلان طبیعت 2.5 کیلوگرمی</span>
                <DetailCartItem>
                    <RowContainer>
                        <CartCheckoutDiscountPrice>
                            12,700
                        </CartCheckoutDiscountPrice>
                        <MainPrice>
                            12,000
                        </MainPrice>
                        <span>{constants.strings.Common.currency}</span>
                    </RowContainer>
                    <ChangeCounCart width={'100px'} />
                </DetailCartItem>
            </TitleContainer>
        </CartItemContainer>
    )
    return (
        <CartCheckoutContainer>
            <RowContainer>
                <BoldSpan>سبدخرید من</BoldSpan>
                <span>4 کالا</span>
            </RowContainer>
            <div>
                {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(()=>(
                    renderCartItem()
                ))}
            </div>
        </CartCheckoutContainer>
    );
}

export default CartCheckout;
