import { useState } from "react";
import { HeaderWrapper, HeaderInner, Logo, HToggleBtn, HeaderMenu, Nav, HeaderAccount, SignUpBtn, AvatarImg} from './header.styled'
import logo from '../../img/logo.svg'
import avatar from '../../img/avatar.svg'

export default function Header(){
  const [ isOpen, setIsOpen] = useState(false)
  return(
    <HeaderWrapper>
      <HeaderInner>
        <a href="#" className="headerLogo">
          <Logo src={logo} alt="logo"/>
        </a>
        <HToggleBtn $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>Menu</HToggleBtn>
        <HeaderMenu $isOpen={isOpen}>
          <Nav>
            <a href="#">Who we are</a>
            <a href="#">Contacts</a>
            <a href="#">Menu</a>
          </Nav>
          <HeaderAccount>
            <AvatarImg src={avatar} alt="Avatar"/>
            <SignUpBtn>Sign Up</SignUpBtn>
          </HeaderAccount>
        </HeaderMenu>
      </HeaderInner>
    </HeaderWrapper>
  )
}