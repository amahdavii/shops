import { BetweenRow, FitbetweenRow, FitContainerStart } from "src/styles/sharedStyle";
import { MainHeaderContainer, MainHeaderFix, HeaderDesktop } from './style'
import Button from '../button'
import * as constants from 'src/constants'
import Image from "next/image";
import SearchBox from "../../common/searchBox";
import Baner from './baner'
import NavBar from './navbar'

const Header = ({withoutShop}) => {
    return (
      <HeaderDesktop>
        <MainHeaderFix>
          <MainHeaderContainer>
            <FitbetweenRow>
              <FitContainerStart>
                <Image src={constants.Images.logo} width={136} height={35} />
                {withoutShop ? null : <SearchBox />}
              </FitContainerStart>

              <Button
                title={constants.strings.headerSection.login}
                icon={'H'}
                background={constants.Colors.orangeDark}
                color={constants.Colors.text.primery}
                deactive={false}
                iconSize={32}
              />
            </FitbetweenRow>
          </MainHeaderContainer>
          {withoutShop ? null : (
            <>
              <Baner />
              <NavBar />
            </>
          )}
        </MainHeaderFix>
      </HeaderDesktop>
    )
}

export default Header;
