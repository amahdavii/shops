
import {   useState ,useEffect} from 'react';
import { MainModalAlert, ModalContainerAlert,ChildTitle} from '../changeLocation/style';
import {BackModal} from '../../common/Modal/style'
import {BetweenRow,RowContainer} from 'src/styles/sharedStyle'
import ReactDOM from 'react-dom';
import { IconBox } from 'src/styles/sharedStyle';
import Button from 'src/components/common/button'
const RemoveCartModal=(props) => {
    const{visibility,hide}=props
    const[visible,setVisible]=useState(false)

    //---------------handle esc button-----------------------------------------
    useEffect(() => {
        const escFunction = (event) => {
            if(event.keyCode === 27) {
                props.hide()
            }
        }
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    },[props]);
    // -------------------------------------------------------------------------

    //-------------------handle change visibility-------------------------------
    useEffect(()=>{
        setVisible(visibility)
    },[visibility])
    // -------------------------------------------------------------------------
      
    return (typeof window !== "undefined" && visible)
       ? ReactDOM.createPortal(
        <ModalContainerAlert style={{display:visible ?'flex' :'none'}}>
            <BackModal onClick={hide}/>
            <MainModalAlert>
                <BetweenRow>
                    <span>انتخاب آدرس تحویل</span>
                    <IconBox data-icon="u" onClick={hide}/>
                </BetweenRow>
                <ChildTitle>آیا از حذف همه کالاها از سبد خریدتان اطمینان دارید؟</ChildTitle>
                <RowContainer>
                    <Button 
                    title={"بله حذف شود"} 
                    background={'#004f9e'}
                    color={'#fff'}
                    deactive={false}
                    width={'130px'}
                    height={'40px'}
                    margin={'0 0 0 10px'}
                    /> 
                    <Button 
                    title={"انصراف"} 
                    background={'#fff'}
                    color={'#494f55'}
                    border={'#707070'}
                    deactive={false}
                    width={'130px'}
                    height={'40px'}
                    /> 
                </RowContainer>
            </MainModalAlert>            
        </ModalContainerAlert>
    ,document.getElementById('root'))
    :null
}

export default RemoveCartModal;