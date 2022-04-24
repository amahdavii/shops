import {  Container } from "src/styles/sharedStyle";
import {  MainContainer } from "./style";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";

const MainLayout = (props) => {
    const{children}=props
    return (
        <>
            <Header />
            <MainContainer id="root">
                <Container>
                    {children}
                </Container>
            </MainContainer>
            <Footer/>
        </>
    );
}

export default MainLayout;
