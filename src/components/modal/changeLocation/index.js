
import {   useState ,useEffect} from 'react';
import { ChildTitle, MainModalAlert, ModalContainerAlert} from './style';
import {BackModal} from '../../common/Modal/style'
import {BetweenRow} from 'src/styles/sharedStyle'
import ReactDOM from 'react-dom';
import { IconBox } from 'src/styles/sharedStyle';
import Button from 'src/components/common/button'
const ChangeLocationModal=(props) => {
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
                <ChildTitle>درصورت تغییر آدرس، کالاهای موجود در سبد خرید شما حذف می شود و باید فروشگاه دیگری را انتخاب کنید</ChildTitle>
                <BetweenRow>
                    <Button 
                    title={"فروشگاه دیگری را انتخاب می کنم"} 
                    background={'#2bc430'}
                    color={'#ffffff'}
                    deactive={false}
                    /> 
                    <Button 
                    title={"آدرس خود را تغییر نمی دهم"} 
                    background={'#fff'}
                    color={'#494f55'}
                    border={'#707070'}
                    deactive={false}
                    /> 
                </BetweenRow>
            </MainModalAlert>            
        </ModalContainerAlert>
    ,document.getElementById('root'))
    :null
}

export default ChangeLocationModal;