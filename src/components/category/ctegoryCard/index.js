import {CategoryCardConatiner, CategoryName, ImageBox} from './style'
import * as constants from 'src/constants'
const CategoryCard = (props) => {
    const{title,image}=props
    return (        
        <CategoryCardConatiner imgUrl={constants.Images.mainCategoryPage.rectangel}>
            <img src={image.src} layout="fill"/>
            <CategoryName>{title}</CategoryName>
        </CategoryCardConatiner>
    );
}

export default CategoryCard;
