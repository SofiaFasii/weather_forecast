import styled from "styled-components";
import arrow from '../../img/arrow.svg'

export const HeaderWrapper = styled.header`
    background-color: #FFFFFF;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 500;
    font-size: 10px;
    position: relative;
    @media(min-width: 1200px){
        font-size: 12px;
    }
`
export const HeaderInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 50px;
    @media(min-width: 768px){
        height: 70px;
        padding: 0 100px;
    }
    @media(min-width: 1200px){
        height: 80px;
        padding: 0 150px;
    }
`
export const Logo = styled.img`
    width: 34px;
    @media (min-width: 768px){
       width: 54px;
    }
    @media (min-width: 1200px){
        width: 82px;
    }
`
export const HToggleBtn = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    gap: 5px;
    border: none;
    cursor: pointer;
    &::after{
        content: "";
        width: 10px;
        height: 10px;
        background: url(${arrow}) no-repeat center / contain;
        transition: transform .1s;
        transform: ${({ $isOpen}) => ($isOpen ? "rotate(-90deg)" : "rotate(0)" )};
    }
    @media (min-width: 768px){
        display: none;
    }
`
export const HeaderMenu = styled.div`
    display: ${({$isOpen}) => ($isOpen ? "flex" : "none")};
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 146px;
    background-color: #E6E6E6;
    z-index: 10;
    padding: 30px 50px;
    box-shadow: inset 0 20px 45px -20px rgba(0, 0, 0, 0.3);
    @media(min-width: 768px){
        position: static;
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        width: auto;
        padding: 0;
        height: auto;
        background: none;
        box-shadow: none;
    }
`
export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;
    a:hover{
        text-decoration: underline;
    }
    @media(min-width: 768px){
        flex-direction: row;
        gap: 45px;
        margin-left: 57px;
    }
    @media(min-width: 1200px){
        margin-left: 111px;
    }
`
export const HeaderAccount = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    @media(min-width: 768px){
        flex-direction: row-reverse;
        gap: 25px;
    }
    @media(min-width: 1200px){
        gap: 27px;
    }
`
export const SignUpBtn = styled.button`
    background-color: #FFB36C;
    width: 73px;
    height: 28px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover{
        background-color: #eb9d55;
    }
    @media(min-width: 1200px){
        width: 89px;
        height: 35px;
    }
`
export const AvatarImg = styled.img`
    width: 40px;
    @media(min-width: 1200px){
        width: 50px;
        
    }
`