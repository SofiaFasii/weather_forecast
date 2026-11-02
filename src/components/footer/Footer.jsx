import logo from '../../img/logo.svg';
import instagram from '../../img/instagram.svg'
import facebook from '../../img/facebook.svg'
import whatsapp from '../../img/whatsapp.svg'
import { FooterWrap, FooterInner, Logo, AddressBlock, ContactBlock, Socials} from "./footer.styled"
 
export default function Footer(){
    return(
        <FooterWrap>
            <FooterInner>
                <a href="#" className="headerLogo">
                    <Logo src={logo} alt="logo"/>
                </a>
                <AddressBlock>
                    <p>Address</p>
                    <a href="#">Svobody str. 35</a>
                    <a href="#">Kyiv</a>
                    <a href="#">Ukraine</a>
                </AddressBlock>
                <ContactBlock> 
                    <p>Contact us</p>
                    <Socials>
                        <a href="https://www.instagram.com" target="_blank"><img src={instagram} alt="instagram"/></a>
                        <a href="https://www.facebook.com" target="_blank"><img src={facebook} alt="facebook"/></a>
                        <a href="https://www.whatsapp.com" target="_blank"><img src={whatsapp} alt="whatsapp"/></a>
                    </Socials>
                </ContactBlock>
            </FooterInner>
        </FooterWrap>
    )
}