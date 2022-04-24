import { IconBox } from "@/src/styles/sharedStyle";
import Image from "next/image";
import { useState,useEffect } from "react";
import * as constants from '../../../constants'
import { AddToCartBox, CountBox } from "../addToCart/style";
const ChangeCounCart = (props) => {
    const[add,setAdd]=useState(false)
    const[count,setCount]=useState(2)

    useEffect(() => {
        count ?setAdd(true) :setAdd(false)
    },[count]);

    const minus=()=>{
        console.log('minus',count)

        setCount(count-1)
    }
    const plus=()=>{
        console.log('pluuuus',count)
        setCount(count+1)
    }
    return (
        <AddToCartBox background='#fff' borderColor="#dcdfe1" width={props.width}>           
            <IconBox 
            onClick={plus}
            size={24} 
            data-icon="d"                        
            color={constants.Colors.orangeDark}/>
            <CountBox>{count}</CountBox>
            {count>1
            ?
            <IconBox 
            onClick={minus}
            size={24}                 
            data-icon="W"
            color={constants.Colors.orangeDark}/>
            :
            <IconBox 
            onClick={minus}
            size={20}                 
            data-icon="%"                            
            color={constants.Colors.orangeDark}/>
            }
        </AddToCartBox>
    );
}

export default ChangeCounCart;
