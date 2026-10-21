import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${({ $isModal }) => ($isModal ? 1 : 0)};
    visibility: ${({ $isModal }) => ($isModal ? "visible" : "hidden")};
    transition: opacity .25s ease, visibility .25s;
    @media (min-width: 393px) {
        padding: 0 50px;
    }
`

export const Modal = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 293px;
    padding: 25px;
    background-color: #FFFFFF;
    border-radius: 30px;
    transform: ${({ $isModal }) => ($isModal ? "translateY(0)" : "translateY(-4px)")};
    transition: transform .25s ease;
    z-index: 100;
    @media(min-width: 768px){
        width: 400px;
        padding: 30px 45px 22px;
    }
    @media(min-width: 1200px){
        width: 600px;
        padding: 28px 80px;
    }
`
export const Title = styled.h2`
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 500;
    font-size: 20px;
    @media(min-width: 1200px){
        font-size: 28px;
    }
`
export const Form = styled.form`
    padding: 30px 0 15px 0;
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-size: 12px;
    @media(min-width: 768px){
        padding-top: 17px;
    }
    @media(min-width: 1200px){
       padding-top: 40px;
       font-size: 14px;
    }
`
export const Label = styled.label`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-weight: 500;
`
export const Input = styled.input`
    height: 40px;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    background-color: #E4E4E4;
    &:focus {
        outline: 2px solid #a7a7a7;
    }
    @media(min-width: 1200px){
       height: 50px;
    }
`
export const SubmitBtn = styled.button`
    align-self: center;
    width: 107px;
    height: 35px;
    border: none;
    border-radius: 10px;
    background-color: #FFB36C;
    font-family: inherit;
    cursor: pointer;
    &:hover{
        background-color: #eb9d55;
    }
`
export const P = styled.p`
    font-size: 8px;
    a{
        text-decoration: underline;
    }
    @media(min-width: 1200px){
       font-size: 10px;
    }
`