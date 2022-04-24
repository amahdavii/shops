import { BanerBackground, CartTitle, MainBanerConatiner } from "./style";
import * as constants from 'src/constants'
import { BetweenRow, RowContainer } from "src/styles/sharedStyle";
import Image from "next/image";
import Button from "../../button";
import { useCallback, useEffect, useState } from "react";
import CartModal from 'src/components/common/cartModal'
const Baner = () => {
    const[height,setHeight]=useState('100px')
    const[logoHeight,setLogoHeight]=useState(50)
    const[logoWidth,setLogoWidth]=useState(150)
    const[visible,setVisible]=useState(false)



    // const handleScroll = useCallback((event) => {
    //     let scrollTop = window.scrollY;
    //       if (scrollTop >= 350 ) {
    //         setHeight('100px')
    //         setLogoHeight(50)
    //         setLogoWidth(150)
    //       }
    //       else{
    //         setHeight('216px')
    //         setLogoHeight(60)
    //         setLogoWidth(180)


    //       }
    // });
    
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll, false);
    //     };
    // }, []);
    return (
        <BanerBackground imgUrl={constants.Images.mainCategoryPage.mainBaner} height={height}>
            <CartModal visibility={visible} hide={()=>setVisible(false)}/>
            <MainBanerConatiner>
                <BetweenRow>
                    <BetweenRow>
                        <Image src={constants.Images.mainCategoryPage.whole} width={logoWidth} height={logoHeight}/>
                        <RowContainer>
                            <span>{constants.strings.headerSection.byFrom}</span>
                            <span>{constants.strings.headerSection.shopName}</span>
                        </RowContainer>
                    </BetweenRow>
                    <Button                    
                    icon= {"U"}
                    background={constants.Colors.white}
                    color={constants.Colors.text.secondary}
                    deactive={false}
                    iconSize={24}
                    onClick={()=>setVisible(true)}
                    >
                        <CartTitle>0</CartTitle>
                    </Button> 

                </BetweenRow>
            </MainBanerConatiner>
        </BanerBackground>
    );
}

export default Baner;
