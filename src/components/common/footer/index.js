import * as constants  from "src/constants";
import Image from "next/image";
import { BetweenRow, BoldSpan, Container, FitbetweenRow, FitContainerEnd, FitContainerStart } from "src/styles/sharedStyle";
import {
  AlinshopDescrbeFooter,
  AlinshopOptionConatiner,
  BeUsContainer,
  BoldText,
  CreditContainer,
  FooterIcon,
  FooterIconBox,
  FooterTitleIcon,
  GrayText,
  GuidContainer,
  ImageBetween,
  LawContent,
  MaleInfoContainer,
  ServiceContainer,
  FooterDesktop,
} from './style'
import { useEffect } from "react";

const Footer = () => {

    useEffect(()=>{
        console.log('useEffect',constants)
    },[])
    const footerCreator=(img,txt)=>(
        <FooterIconBox>
            <FooterIcon>
                <Image  src={img.src} alt="delivery-icon-footer" width={40} height={40}/>
            </FooterIcon>                  
            <FooterTitleIcon>{txt}</FooterTitleIcon>
        </FooterIconBox>
    )
    return (
      <FooterDesktop>
        <Container>
          <AlinshopOptionConatiner>
            {footerCreator(
              constants.Icons.delivery,
              constants.strings.footer.delivery
            )}
            {footerCreator(
              constants.Icons.bestProduct,
              constants.strings.footer.refund
            )}
            {footerCreator(
              constants.Icons.support24h,
              constants.strings.footer.suport
            )}
            {footerCreator(
              constants.Icons.safepayment,
              constants.strings.footer.safePayment
            )}
          </AlinshopOptionConatiner>
          <BetweenRow>
            <MaleInfoContainer>
              <BoldText>{constants.strings.footer.title}</BoldText>
              <GrayText>{constants.strings.footer.describeAbputUs}</GrayText>
            </MaleInfoContainer>
            <ServiceContainer>
              <BoldText>{constants.strings.footer.access}</BoldText>
              <GrayText>{constants.strings.footer.aboutUs}</GrayText>
              <GrayText>{constants.strings.footer.conectUs}</GrayText>
              <GrayText>{constants.strings.footer.rouls}</GrayText>
              <GrayText>{constants.strings.footer.faq}</GrayText>
              <GrayText>{constants.strings.footer.jobOffer}</GrayText>
            </ServiceContainer>
            <GuidContainer>
              <BoldText>{constants.strings.footer.customerGuid}</BoldText>
              <GrayText>{constants.strings.footer.suportPhone}</GrayText>
              <GrayText>{constants.strings.footer.guidShop}</GrayText>
              <GrayText>{constants.strings.footer.refundProcess}</GrayText>
              <GrayText>{constants.strings.footer.rouls}</GrayText>
              <GrayText>{constants.strings.footer.private}</GrayText>
            </GuidContainer>
            <CreditContainer>
              <BetweenRow>
                <img
                  src={constants.Images.footer.bussiness.src}
                  width={'30%'}
                />
                <img
                  src={constants.Images.footer.internatinal.src}
                  width={'30%'}
                />
                <img src={constants.Images.footer.tejaart.src} width={'30%'} />
              </BetweenRow>
              <BeUsContainer>
                <FitContainerStart>
                  <BoldSpan>{constants.strings.footer.beWithUs}</BoldSpan>
                </FitContainerStart>
                <FitContainerEnd>
                  <FitbetweenRow>
                    <Image
                      src={constants.Icons.linkedin}
                      width={30}
                      height={30}
                    />
                    <Image
                      src={constants.Icons.instagram}
                      width={30}
                      height={30}
                    />
                    <Image
                      src={constants.Icons.twitter}
                      width={30}
                      height={30}
                    />
                  </FitbetweenRow>
                </FitContainerEnd>
              </BeUsContainer>
            </CreditContainer>
          </BetweenRow>
        </Container>
        <LawContent>
          <p>{constants.strings.footer.law}</p>
        </LawContent>
      </FooterDesktop>
    )
}

export default Footer;
