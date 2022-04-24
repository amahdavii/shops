
import {   useState ,useEffect} from 'react';
import { BackModal, ChildContainer, CloseModal, MainModal, ModalContainer} from './style';
import ReactDOM from 'react-dom';

const Modal=(props) => {
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
        <ModalContainer style={{display:visible ?'flex' :'none'}}>
            <BackModal onClick={hide}/>
            <MainModal>
                <CloseModal onClick={hide}>
                    <span>&#x2715;</span>
                </CloseModal>
                <ChildContainer>
                    {props.children}
                </ChildContainer>
            </MainModal>            
        </ModalContainer>
    ,document.getElementById('root'))
    :null
}

export default Modal;