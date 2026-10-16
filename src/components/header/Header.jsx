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

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="header">
//       <div className="header__inner">
//         <a href="/" className="header__logo">
//           <img src={logo} />
//         </a>

//         {/* кнопка видна тільки на мобільному */}
//         <button
//           className="header__toggle"
//           onClick={() => setIsOpen((prev) => !prev)}
//           aria-expanded={isOpen}
//         >
//           Menu
//           <span className={`chevron ${isOpen ? "chevron--up" : ""}`} />
//         </button>

//         <div className={`header__menu ${isOpen ? "header__menu--open" : ""}`}>
//           <nav className="nav">
//             <a href="#about">Who we are</a>
//             <a href="#contacts">Contacts</a>
//             <a href="#menu">Menu</a>
//           </nav>

//           <div className="header__actions">
//             <button className="btn-signup">Sign up</button>
//             <img className="avatar" src="/avatar.png" alt="Profile" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }