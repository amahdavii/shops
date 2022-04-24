import Image from "next/image";
import { IconBg, MainHeaderFix } from "./style";
import * as constants from 'src/constants'
const CategoryHeaderCard = () => {
    return (
        <MainHeaderFix>
            <span>لبنیات</span>
            <IconBg imgUrl={constants.Images.blob}>
                <Image src={constants.Images.categoryIcon} width={64} height={64}/>
            </IconBg>
        </MainHeaderFix>
    );
}

export default CategoryHeaderCard;
