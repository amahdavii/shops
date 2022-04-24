import { IconBox } from "@/src/styles/sharedStyle";
import Image from "next/image";
import { useState,useEffect } from "react";
import * as constants from '../../../constants'
import { AddToCartBox, CountBox } from "./style";
const AddToCart = () => {
    const[add,setAdd]=useState(false)
    const[count,setCount]=useState(0)

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
        <AddToCartBox>
            {add
            ?<>
                {/* <Image 
                src={constants.Icons.plus} 
                onClick={plus}
                width={24}
                height={24}
                /> */}
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

                {/* <Image 
                src={constants.Icons.remove}
                width={24}
                height={24}
                onClick={minus}
                />  */}
            </>
            // :<Image 
            // src={constants.Icons.plus} 
            // onClick={plus}
            // width={24}
            // height={24}
            // />
            :<IconBox 
            onClick={plus}
            size={24} 
            data-icon="d"            
            color={constants.Colors.orangeDark}/>

            }
        </AddToCartBox>
    );
}

export default AddToCart;
