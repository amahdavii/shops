
import {   useState ,useEffect} from 'react';
import { BackModal, ChildContainerCart, CloseModalCart, EmptyTitle, FooterCart, HeaderCart, MainModaCartl, ModalContainer, NotifContainer, PaymentSection, RemoveCart} from './style';
import ReactDOM from 'react-dom';
import { BetweenRow, BoldSpan, CenterFullContainer, ColumnCenterFitContainer, ColumnFitContainer, IconBox, RowContainer } from '@/src/styles/sharedStyle';
import { CartTitle } from '../header/baner/style';
import { AddToCartTitle } from '../ProductView/style';
import { AddToCartBox } from '../addToCart/style';
import * as constants from 'src/constants'
import CartItem from 'src/components/common/cartItem'
import RemoveCartModal from 'src/components/modal/removeCart'
import Image from 'next/image';
const CartModal=(props) => {
    const{visibility,hide}=props
    const[visible,setVisible]=useState(false)
    const[visibleRemove,setVisibleRemove]=useState(false)


    //---------------handle esc button-----------------------------------------
    useEffect(() => {
        const escFunction = (event) => {
            if(event.keyCode === 27) {
                props.hide()
            }
        }
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    },[props]);
    // -------------------------------------------------------------------------

    //-------------------handle change visibility-------------------------------
    useEffect(()=>{
        setVisible(visibility)
    },[visibility])
    // -------------------------------------------------------------------------
      
    return (typeof window !== "undefined" && visible)
       ? ReactDOM.createPortal(
        <ModalContainer style={{display:visible ?'flex' :'none'}}>
            <RemoveCartModal visibility={visibleRemove} hide={()=>setVisibleRemove(false)}/>
            <BackModal onClick={hide}/>
            <MainModaCartl>
                <HeaderCart>
                    <BetweenRow onClick={hide}>
                        <RowContainer>
                            <BoldSpan>سبدخرید من</BoldSpan>
                            <span>4 کالا</span>
                        </RowContainer>
                        <IconBox data-icon='$'/>
                    </BetweenRow>
                    <RemoveCart>
                        <span>فروشگاه وال مارکت</span>
                        <RowContainer>
                            <span>حذف همه</span>
                            <CartTitle>
                                <IconBox data-icon="%" size={24} onClick={()=>setVisibleRemove(true)}/>
                            </CartTitle>
                        </RowContainer>
                    </RemoveCart>
                </HeaderCart>
                {/* <ColumnCenterFitContainer>
                    <Image src={constants.Images.cartEmpty} width={200} height={200}/>
                    <EmptyTitle>سبد خرید شما خالی است</EmptyTitle>
                </ColumnCenterFitContainer> */}
                <ChildContainerCart>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(()=>(
                        <CartItem/>
                    ))}
                </ChildContainerCart>
                <FooterCart>
                        <NotifContainer>
                            <IconBox data-icon="&" size={50}/>
                            <span>هزینه ارسال رایگان خواهد بود</span>
                        </NotifContainer>
                    <PaymentSection>
                        <AddToCartBox color='#fff' background='#ed7203' radius={'30px'} padingX="50px" padingY="10px">                            
                            <AddToCartTitle>تکمیل سفارش</AddToCartTitle>
                        </AddToCartBox>
                        <RowContainer>
                            <BoldSpan>۳۲,۳۹۶,۰۰۰</BoldSpan>
                            <span>{constants.strings.Common.currency}</span>
                        </RowContainer>
                    </PaymentSection>
                </FooterCart>
            </MainModaCartl>            
        </ModalContainer>
    ,document.getElementById('root'))
    :null
}

export default CartModal;