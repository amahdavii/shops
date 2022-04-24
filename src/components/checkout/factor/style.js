
import styled from 'styled-components';


export const MainFactor=styled.main`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width:30% ;
  position:sticky ;
  top:270px ;
`
;
export const BodyCheckout = styled.div`
   height: 80%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 25px;
`;
export const FactoriInfo = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 1px solid #eef5f9;
`;
export const FactorDetail = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 10px;
  direction: rtl;
`;
export const SpanChekout = styled.span`
  color:#494f55;
  font-size:14px ;
  margin-left:5px ;

`
export const SpanNote = styled.span`
  color:#494f55;
  font-size:12px ;
  margin-bottom: 20px;
`
export const RowDiv = styled.div`
  margin-top:10px ;
  margin-bottom: 10px;
`

export const SpanTitle = styled.span`
  color:#494f55;
  font-size:14px ;
  margin-left:5px ;
  margin: 20px 0;
  font-weight:bold ;
`
export const Button = styled.button`

  background:#ed7203 ;
  width: 80%;
  height: 67px;
  margin: 22px 12.5px 0 5px;
  padding: 15px 192px 14px;
  border-radius: 5px;
`;
export const Shipment =styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-top: 10px;
  direction:rtl;
  `;

export const InputProperty =styled.input` 
    border: 1px solid #dcdfe1;
    border-radius: 5px;
    outline: none;
    padding: 15px 5px;
    margin-top:10px ;
    margin-bottom:10px ;
    `;

export const InputCheckout = styled.input`
    direction: rtl;
    vertical-align: top;
    height: 15px;
    width: 15px;
    margin-top: 4px;
    margin-left: 5px;
`;
export const BankChoise =styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between; 
  direction:rtl;
  `;
  export const divFactorDetail = styled.div`
  display:none ;
  `
export const EachBank =styled.button`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border:${props => props.primary ? '1px solid #ed7203' : '1px solid #dcdfe1' }  ;
  border-radius: 5px;
  width: 48%;
  cursor: pointer;
`;
export const MelatLogo =styled.img`
 width: 25%;
 `
 export const SamanLogo =styled.img`
 width: 30%;`
 ;
export const Discount= styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 50px;

`;
export const BtnDiscount =styled.button`
  width: 28%;
  padding: 10px 0px;
  border-radius: 5px;
  background:${props=> props.primary  ? '#ed7203' : 'rgba(237, 114, 3, 0.44)'} ;
  color: #ffffff;
  border: none;
  margin-right:5px ;`
;
export const BtnDiscountActive =styled.button`
  width: 28%;
  padding: 15px 0px;
  border-radius: 5px;
  background: #ed7203;
  color: #ffffff;
  border: none;
  margin-right:5px ;
  cursor: pointer;
  `
;
export const DiscountInput =styled.input `
  width: 70%;
  border: 1px solid #dcdfe1;
  border-radius: 5px;
  outline: none;
  padding: 10px 5px;
  `
  ;
export const FinalPrice =styled.div`
 display: flex;
  justify-content: space-between;
  direction:rtl ;
  align-items:center ;
` ; 
export const Payment = styled.button`
 width: 100%;
  background: #ed7203;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 0px;
  margin-top: 10px;
  cursor: pointer;
  font-size:20px ;

`;

export const WalletRow= styled.div`
  display: flex;
  margin-top:20px ;
  margin-bottom:5px ;


`;
