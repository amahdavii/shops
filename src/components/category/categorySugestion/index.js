import {CategoryRowConatiner,CategoryConatiner, CategorySuggestionConatiner,TitleSuggestion, TitleSuggestionCategory,SuggestionItem} from './style'
import {ColumnContainer} from 'src/styles/sharedStyle'
import * as constants from 'src/constants'
import Image from 'next/image'

const CategorySugestion = () => {

    const renderCategory=()=>(
        <SuggestionItem>
            <Image src={constants.Images.categorySuggestion} width={120} height={120}/>
            <TitleSuggestionCategory>همه دسته بندی ها</TitleSuggestionCategory>
        </SuggestionItem>
    )
    return (        
        <CategorySuggestionConatiner imgUrl={constants.Images.suggestionBg}>
            <CategoryConatiner>
                <TitleSuggestion>پیشنهادهای اسرارآمیز</TitleSuggestion>
                <CategoryRowConatiner>
                    {[1,2,3,4,5,6,7,8,9,10,11].map(()=>(
                        renderCategory()
                    ))}
                </CategoryRowConatiner>
            </CategoryConatiner>
        </CategorySuggestionConatiner>
    );
}

export default CategorySugestion;
