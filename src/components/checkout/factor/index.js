import { useState } from 'react';
import * as constants from 'src/constants'

import {
    MainFactor,
    BodyCheckout,
    FactoriInfo,
    FactorDetail,
    Button,
    Shipment,
    InputProperty,
    InputCheckout,
    BankChoise,
    EachBank,
    MelatLogo,
    SamanLogo,
    Discount,
    BtnDiscount,
    DiscountInput,
    FinalPrice,
    Payment,
    SpanChekout,
    SpanTitle,
    RowDiv,
    SpanNote,
    WalletRow
} from './style'
  
  
const Factor = () => {

    const [value, setValue] = useState('')
    const [active, setActive] = useState(false);
    const [activeWall, setActiveWall] = useState(false);
    const [selectBank, setselectBank] = useState(null);

    
    return (
        <MainFactor>
            <BodyCheckout>  
                <FactoriInfo>
                    <FactorDetail>
                        <SpanChekout>تعداد اقلام</SpanChekout>
                        <divFactorDetail>
                            <SpanChekout>۷</SpanChekout>
                            <SpanChekout>عدد</SpanChekout>
                        </divFactorDetail>
                    </FactorDetail>
                    <FactorDetail>
                        <SpanChekout>مبلغ کل سفارش</SpanChekout>
                        <divFactorDetail>
                            <SpanChekout>۳۹۶,۰۰۰</SpanChekout>
                            <SpanChekout>تومان</SpanChekout>
                        </divFactorDetail>
                    </FactorDetail>
                    <FactorDetail>
                        <SpanChekout>هزینه ارسال</SpanChekout>
                        <SpanChekout>رایگان</SpanChekout>
                    </FactorDetail>
                    <FactorDetail>
                        <SpanChekout>تخفیف</SpanChekout>
                        <divFactorDetail>
                            <SpanChekout>۹۶,۰۰۰</SpanChekout>
                            <SpanChekout>تومان</SpanChekout>
                        </divFactorDetail>
                    </FactorDetail>
                    <FactorDetail>
                        <SpanChekout>جمع کل</SpanChekout>
                        <divFactorDetail>
                            <SpanChekout>۳۰۰,۰۰۰</SpanChekout>
                            <SpanChekout>۳۰۰,۰۰۰</SpanChekout>
                        </divFactorDetail>
                    </FactorDetail>
                <Shipment>
                    <SpanChekout>توضیحات</SpanChekout>
                    <InputProperty type="text" placeholder="توضیحات سفارش خود را اینجا بنویسید"></InputProperty>
                    <SpanTitle>انتخاب روش پرداخت</SpanTitle>
                    <RowDiv>
                        <InputCheckout type="checkbox" 
                        onClick={(e)=>setActive(e.target.checked)}
                        checked={active}  />
                        <SpanChekout>پرداخت اینترنتی</SpanChekout>
                    
                    </RowDiv>
                    <SpanNote>پرداخت از طریق کلیه کارت های عضو شتاب</SpanNote>
                
                <BankChoise>
                        <EachBank
                        
                            onClick={(e)=>setselectBank('melat')}
                            primary={selectBank == 'melat' ? true : null}
                            >
                            <MelatLogo src={constants.Images.melat.src} alt="melat-logo"/>
                            <SpanChekout>درگاه بانک ملت</SpanChekout>
                        </EachBank>
                        <EachBank
                        onClick={(e)=>setselectBank('saman')}
                        primary={selectBank == 'saman' ? true : null}
                        >
                            <SamanLogo src={constants.Images.saman.src} alt="saman-logo"/>
                            <SpanChekout>درگاه بانک سامان</SpanChekout>
                        </EachBank>
                </BankChoise>
                    <WalletRow>
                        <InputCheckout type="checkbox"  
                        onClick={(e)=>setActiveWall(e.target.checked)}
                        checked={activeWall}  />
                        <SpanChekout>کیف پول</SpanChekout>
                    </WalletRow>
                    <SpanChekout>موجودی ۳۴۵,۹۷۵ تومان</SpanChekout>
                    <SpanTitle>کد تخفیف دارید؟</SpanTitle>
                    <Discount>
                        <DiscountInput type="text"
                        onChange={(e)=>setValue(e.target.value)}
                        />
                        <BtnDiscount 
                        primary={value.length >3 ?true :false}
                        >اعمال</BtnDiscount>
                    </Discount>
                    </Shipment>
                </FactoriInfo>
                <FinalPrice>
                    <SpanTitle>مبلغ قابل پرداخت</SpanTitle>
                    <RowDiv>
                        <SpanTitle>۳۰۰,۰۰۰</SpanTitle>
                        <SpanChekout>تومان</SpanChekout>
                    </RowDiv>
                </FinalPrice>
                <Payment>پرداخت</Payment>
            </BodyCheckout>
        </MainFactor>

    );
}

export default Factor;
