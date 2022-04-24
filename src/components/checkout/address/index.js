import { useState } from 'react';
import {BetweenRow,IconBox,BoldSpan,ColumnContainer} from 'src/styles/sharedStyle'
import { EditAddressSpan,AddressItem,AddressBox, HoverBox, TitleBox} from './style';
var fakeAddress="تهران، بزرگراه یادگار امام، خیایبان آبشار، کوچه چهاردیواری، پلاک ۲۳، واحد۱۰۲"
const Address = () => {

    const[edit,setEdit]=useState(false)
    const[select,setSelect]=useState(0)

    const[hover,setHover]=useState(null)


    const renderAddress=(address,index)=>(
        <AddressItem 
        edit={select==index&edit ?true :false} 
        onMouseEnter={() => setHover(index)}
        onMouseLeave={() => setHover(null)}
        >
            {hover==index
            ?<HoverBox>این آدرس خارج از محدوده سرویس دهی فروشگاه انتخابی شما می باشد</HoverBox>
            :null
            }
            <IconBox data-icon={select==index ?"Q" :"P"} color={select==index ?"#ed7203" :"#494f55"} />
            <span>{address}</span>
        </AddressItem>
    )
    return (       
        <AddressBox>
            <TitleBox>
                <BoldSpan size="18">آدرس تحویل سفارش</BoldSpan>
                {edit
                ?<IconBox data-icon="u" size={20}  onClick={()=>setEdit(false)}/>
                :<EditAddressSpan onClick={()=>setEdit(true)}>ویرایش یا تغییر آدرس تحویل</EditAddressSpan>
                }
            </TitleBox>
            {!edit
            ?<AddressItem>
                <IconBox data-icon="Q" color="#ed7203"/>
                <span>{fakeAddress}</span>
            </AddressItem>
            :<ColumnContainer>
                {renderAddress(fakeAddress,0)}
                {renderAddress(fakeAddress,1)}
                {renderAddress(fakeAddress,2)}
                {renderAddress(fakeAddress,3)}              
            </ColumnContainer>
            }

            
        </AddressBox>
    );
}

export default Address;
