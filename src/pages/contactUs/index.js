import MainLayout from "src/layout/mainLayout"
import * as constants from "src/constants"
import Button from "src/components/common/button";
import {ColumnContainer,BoldSpan,IconBox,TextChangable} from 'src/styles/sharedStyle'
import { 
    ContactSection,
    ContactContainer,
    ContactHeader, 
    ContactSendButton, 
    FlexFit ,
    LinkTitle,
    ContactChildren,
    InputThinField,
    InputBigField,
    ContactMap,
    ContactFooterItem,
    ContactFooter,
    ContactFooterItemCircle,
} from "src/styles/contactUs";
import { TitleBottonHeader } from '../../styles/location';
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(
    () => import('src/components/common/mapirArea'),
    { ssr: false }
  )
  
const ContactUs = () => {
    return (
        <MainLayout>
            <ContactSection>
                <ContactContainer>
                    <ColumnContainer>
                        <BoldSpan>تماس با ما</BoldSpan>
                        <TitleBottonHeader width={'80px'}/>                
                    </ColumnContainer>
                    <ContactHeader>
                        <span>لطفا پیش از ارسال ایمیل یا تماس تلفنی  جواب سوالات خود را از طریق<LinkTitle> سوالات متداول</LinkTitle> مشاهده کنید</span>
                        <Button 
                            title={'تماس با ما'} 
                            border={constants.Colors.orangeDark}
                            color={constants.Colors.orangeDark}
                            deactive={false}
                            width={'150px'}
                        />    
                    </ContactHeader>
                    <span>برای پیگیری سفارش خود و یا طرح سوال، فرم زیر را تکمیل کنید</span>
                    <ContactChildren>
                        <FlexFit>
                            <ColumnContainer>
                                <span>موضوع </span>
                                <InputThinField/>
                            </ColumnContainer>
                            <ColumnContainer>
                                <span>نام و نام خانوادگی </span>
                                <InputThinField/>
                            </ColumnContainer>
                            <ColumnContainer>
                                <span>ایمیل </span>
                                <InputThinField/>
                            </ColumnContainer>
                            <ColumnContainer>
                                <span>تلفن تماس </span>
                                <InputThinField/>
                            </ColumnContainer>
                            <ColumnContainer>
                                <span>متن پیام </span>
                                <InputBigField/>
                            </ColumnContainer>
                            <ContactSendButton>
                                <Button
                                title={'تماس با ما'} 
                                background={constants.Colors.orangeDark}
                                color={"#fff"}
                                deactive={false}
                                width={'200px'}
                                />
                            </ContactSendButton>
                        </FlexFit>
                        <FlexFit> 
                            <ContactMap>
                                <DynamicMap/>
                            </ContactMap>     
                        </FlexFit>
                    </ContactChildren>
                </ContactContainer>
                <ContactFooter>
                    <ContactFooterItem>
                        <ContactFooterItemCircle>
                            <IconBox data-icon="M" color="#ed7203" size="32"/>
                        </ContactFooterItemCircle>
                        <BoldSpan>آدرس دفتر مرکزی</BoldSpan>
                        <TextChangable size='13' color="#494f55" margin="15px 0 0 0">تهران،سعادت آباد،خیابان جمشیدی(یکم)،پلاک 4</TextChangable>
                    </ContactFooterItem>
                    <ContactFooterItem>
                        <ContactFooterItemCircle>
                            <IconBox data-icon="4" color="#ed7203" size="32" bold={true}/>
                        </ContactFooterItemCircle>
                        <BoldSpan>ساعت کاری</BoldSpan>
                        <TextChangable size='13' color="#494f55" margin="15px 0 0 0">8:00 الی 21:30</TextChangable>
                        
                    </ContactFooterItem>
                    <ContactFooterItem>
                        <ContactFooterItemCircle>
                            <IconBox data-icon="!" color="#ed7203" size="20"/>
                        </ContactFooterItemCircle>
                        <BoldSpan>تلفن تماس</BoldSpan>
                        <TextChangable size='13' color="#494f55" margin="15px 0 0 0">021-91070099</TextChangable>
                        
                    </ContactFooterItem>
                    <ContactFooterItem>
                        <ContactFooterItemCircle>
                            <IconBox data-icon="*" color="#ed7203" size="24"/>
                        </ContactFooterItemCircle>
                        <BoldSpan>ایمیل سازمانی</BoldSpan>
                        <TextChangable size='13' color="#494f55" margin="15px 0 0 0">info@alinland.com</TextChangable>
                        
                    </ContactFooterItem>
                </ContactFooter>
            </ContactSection>
        </MainLayout>
    );
}

export default ContactUs;
