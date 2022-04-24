import { BetweenRow, FitContainerStart } from 'src/styles/sharedStyle'
import { MainHeaderContainer } from '../../../components/common/header/style'
import Button from '../../../components/common/button'
import * as constants from 'src/constants'
import Image from 'next/image'
import SearchBox from '../../../components/common/searchBox'

const LocationHeader = () => {
  return (
    <>
      <MainHeaderContainer>
        <BetweenRow>
          <FitContainerStart>
            <Image src={constants.Images.logo} width={136} height={35} />
            <SearchBox />
          </FitContainerStart>

          <Button
            title={constants.strings.headerSection.login}
            icon={constants.Icons.user}
            background={constants.Colors.orangeDark}
            color={constants.Colors.text.primery}
            deactive={false}
            iconSize={20}
          />
        </BetweenRow>
      </MainHeaderContainer>
    </>
  )
}

export default LocationHeader
