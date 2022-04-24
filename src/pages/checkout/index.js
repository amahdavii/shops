import MainLayout from 'src/layout/mainLayout'
import {BetweenRow,IconBox,BoldSpan} from 'src/styles/sharedStyle'
import Factor from '../../components/checkout/factor';
import Address from '../../components/checkout/address';

import { CheckoutBox, CheckoutContainer,AddressBox ,EditAddressSpan,AddressItem} from 'src/styles/checkout';
import CartCheckout from '../../components/checkout/cart';

const CheckOut = () => {
    return (
        <MainLayout>
            <CheckoutContainer>
                <CheckoutBox>
                   <Address/>
                   <CartCheckout/>
                </CheckoutBox>
                <Factor/>
            </CheckoutContainer>
        </MainLayout>
    );
}

export default CheckOut;
