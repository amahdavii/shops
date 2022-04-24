import { BetweenRow, Container } from "src/styles/sharedStyle";
import { BackModal, DropDown, ModalAbsolute, ModalAbsoluteBack, ModalAbsoluteContainer, ModalView, NavBarShadowBox, SpaceContainer,CategoryContainerModal } from "./style";
import * as constants from 'src/constants'
import TextIcon from "../../textIcon";
import { useEffect, useState } from "react";
import ShoppingCard from 'src/components/common/shoppingCard'
import DeliveryLocation from 'src/components/common/mapModal/deliveryLocation'
import {ShopContainer} from '../../../../styles/location'
import CategoryHeaderCard from 'src/components/common/categoryHeaderCard'
var shop=[1,2,3,4,5,6,7]

const NavBar = () => {
    const[visible,setVisible]=useState(false)
    const[type,setType]=useState(0)

  
    const handleVisible=(type)=>{
        setType(type)
        setVisible(!visible)
    }
    //---------------modal category--------------------
    const renderCategoryCard=()=>(
        shop.map(()=>(
          <CategoryHeaderCard/>
        ))
      )
    const renderCategory=()=>(
        <ModalAbsolute width={'98%'}>
            <CategoryContainerModal>        
                {renderCategoryCard()}
            </CategoryContainerModal>
        </ModalAbsolute>
    )
    //---------------modal store--------------------
    const renderShopCard=()=>(
        shop.map(()=>(
          <ShoppingCard/>
        ))
      )
    const renderStore=()=>(
        <ModalAbsolute width={'98%'}>
           <ShopContainer>
              {renderShopCard()}
          </ShopContainer>
        </ModalAbsolute>
    )
    //---------------modal map--------------------
    const renderMap=()=>(        
        <ModalAbsolute width={'45%'}>
            <DeliveryLocation /> 
        </ModalAbsolute>
    )


    return (
        <ModalView>
            <NavBarShadowBox>
                <Container>
                    <BetweenRow>
                        <SpaceContainer>
                            <div>
                                <TextIcon
                                    firstIcon={"6"}
                                    title={constants.strings.navbar.category}
                                    secondIcon={(type==0 && visible) ? "y" :'5'}                                    
                                    iconSizeFirst={24}
                                    iconSizeSecond={20}
                                    onClick={()=>{handleVisible(0)}}
                                    firstIconColor={(type==0 && visible) ?'#ed7203' :'#494f55'}
                                    secondIconColor={(type==0 && visible) ?'#ed7203' :'#494f55'}
                                    color={(type==0 && visible) ?'#ed7203' :'#494f55'}
                                    hover={'#ed7203'}

                                />
                            </div>
                            <div>
                                <TextIcon
                                    // firstIcon={constants.Icons.user}
                                    title={constants.strings.navbar.anotherShoping}
                                    secondIcon={(type==1 && visible) ? "y" :'5'}
                                    iconSizeSecond={20}
                                    onClick={()=>{handleVisible(1)}}    
                                    firstIconColor={(type==1 && visible) ?'#ed7203' :'#494f55'}
                                    secondIconColor={(type==1 && visible) ?'#ed7203' :'#494f55'}   
                                    color={(type==1 && visible) ?'#ed7203' :'#494f55'}
                                    hover={'#ed7203'}


                                />
                            </div>
                        </SpaceContainer>
                        <SpaceContainer>
                            <TextIcon
                                firstIcon={"4"}
                                // imageIcon={constants.Icons.time}
                                title={constants.strings.navbar.time}
                                iconSizeFirst={32}
                                firstIconColor={"#000"}   
                                boldIcon={true}                             
                            />
                            <TextIcon
                                firstIcon={"M"}
                                title={constants.strings.navbar.location}
                                secondIcon={(type==2 && visible) ? "y" :'5'}                        
                                iconSizeFirst={28}
                                iconSizeSecond={20}
                                onClick={()=>{handleVisible(2)}}  
                                firstIconColor={(type==2 && visible) ?'#ed7203' :'#494f55'}
                                secondIconColor={(type==2 && visible) ?'#ed7203' :'#494f55'}   
                                color={(type==2 && visible) ?'#ed7203' :'#494f55'}
                                hover={'#ed7203'}


                            />
                        </SpaceContainer>
                    </BetweenRow>
                </Container>
            </NavBarShadowBox>
            <DropDown visible={visible} >
                <BackModal onClick={()=>setVisible(false)}/>
                <ModalAbsoluteContainer>
                    <ModalAbsoluteBack onClick={()=>setVisible(false)}/>
                    {type==2 ?renderMap() :type==0 ?renderCategory() :renderStore()}
                </ModalAbsoluteContainer>
            </DropDown>
        </ModalView>
    );
}

export default NavBar
