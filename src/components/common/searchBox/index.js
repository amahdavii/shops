import Image from "next/image"
import { 
  SearchBack,
  SearchCategoryBox,
  SearchContainer, 
  SearchInput,
  SearchMainContainer,
  SearchNoResult,
  SearchRelativeContainer,
  SearchResult,
  SearchResultBox,
  SearchResultBoxContainer,
  SearchResultBoxDetail,
  SearchResultButton,
  SearchResultDetailTitle,
  SearchResultDetailTitleBox,
  SearchResultDetailTitleBoxContent,
  SearchResultHeader,
  SearchResultHeaderClose,
  SearchResultRowTitle,
  SearchResultRowTitleBold,
  SearchResultRowTitleBoldClick
} from "./style"
import * as constants from '../../../constants'
import { IconBox, RowContainer, TextChangable } from "@/src/styles/sharedStyle"
import { useEffect, useState } from "react";

export default function SearchBox() {



  const [search, setSearch] = useState(null);
  const [showResault, setShowResault] = useState(false);
  const [searchResault, setSearchResault] = useState(null);



  const hide=()=>{
      setSearch(null)
  }
  const goResault=()=>{
    hide()
  }

  useEffect(()=>{
    console.log('show',showResault)
    

  },[showResault])
  useEffect(()=>{
    console.log('result',searchResault)
   
      if(search==null || search==''){
          setShowResault(false)
      }
      else if(searchResault!=null){
          setShowResault(true)
      }

  },[searchResault,search])

  //----------------search---------------------------------
  // const request = debounce(value => {
  //     // dispatch(HomeAction.search(value))
  //     setSearchResault([1,2,3,4,5])
  // }, 1000);
  // const debouceRequest = useCallback(value => request(value), []);
  const onSearch=(val)=>{
    console.log('val',val)
      setSearch(val)
      setSearchResault([1,2,3,4,5])
  } 
  //-----------------------------------------------------------

  const renderSearch=()=>(
    <SearchResultBoxContainer>
    {
    searchResault.map((item,index)=>(
        <SearchResultBox key={index}>
            {/* {!!item.thumbnail */}
            <img src={constants.Images.noPic.src} alt="img"/>
            {/* :<img src={photo.NoPhoto} alt="img"/> */}

            
            <SearchResultBoxDetail>
                <SearchResultDetailTitle>?????????? ?????????? ?????????? ?????? ?????? Indian Herbs and Cysteine ???????????????? 250 ???????? ??????????</SearchResultDetailTitle>
                <SearchResultDetailTitleBox>
                    <span>
                        ???????? ????????
                        &nbsp; : &nbsp;
                        <TextChangable size={'11'} color='#a2b0bf'>??????????</TextChangable>
                    </span>
                    <span>
                        ????????    
                        &nbsp; : &nbsp;
                        <TextChangable size={'11'} color='#a2b0bf'>????????????????</TextChangable>
                    </span>

                </SearchResultDetailTitleBox>
            </SearchResultBoxDetail>
        </SearchResultBox>
    ))
    }
    </SearchResultBoxContainer>    
  )

  const renderRelated=()=>(
    <SearchCategoryBox>
      {[1,2,3,4,5].map(()=>(
        <RowContainer>
          <IconBox data-icon="6" color="#494f55" margin="0 0 0 10px" size={24}/>
          <span>?????????? ??????</span>
        </RowContainer>
      ))}
    </SearchCategoryBox>
  )

  const renderResault=()=>{
    return(
    searchResault!=null
        ?
        <>
            <SearchBack onClick={hide}/>
                <SearchResult>
                    <SearchResultHeader>
                        <IconBox data-icon="u" size={20} onClick={hide}/>
                        <input autoFocus type="text" placeholder="?????????? ?????????????? ..."  value={!!search ?search :''} onChange={e=>onSearch(e.target.value)}/>                                                
                    </SearchResultHeader>
                    <RowContainer>
                      <IconBox data-icon="I" color="#ED7203"/>
                      <span>?????????? ???????????? ?????????? ???? ?????????????? ???????????? ???? ?????? ??????????</span>
                    </RowContainer>
                {searchResault
                ?
                <>
                    <SearchResultRowTitle>
                        <span>
                        12
                        &nbsp;
                        &nbsp;
                        <SearchResultRowTitleBold>??????????</SearchResultRowTitleBold>
                        </span>
                        <SearchResultRowTitleBoldClick
                        onClick={goResault}>???????????? ?????? 12 ??????????</SearchResultRowTitleBoldClick>
                    </SearchResultRowTitle>
                    {renderSearch()}
                    {renderRelated()}
                </>
                :<SearchNoResult>
                    <span>???????????????? ???????????? ???????? ??????</span>

                </SearchNoResult>
                }

            </SearchResult>
        </>
   
        :null

    
    )
  }

  return(
    <SearchMainContainer>
        <SearchRelativeContainer>
            {!showResault
                ?<SearchContainer>
                  <IconBox data-icon="I" color="#ED7203"/>
                  <SearchInput placeholder={constants.strings.headerSection.serach} onChange={e=>onSearch(e.target.value)}/>
                </SearchContainer>
                :renderResault()
            }
        </SearchRelativeContainer>
        
    </SearchMainContainer>
  )
}
