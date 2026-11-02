import styled from "styled-components";

export const Caruosel = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 150px;
    @media (min-width: 768px) {
        height: 180px;
    }
    @media (min-width: 1200px) {
        height: 211px;
    }
`
export const Box = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 35px;
    @media (min-width: 768px) {
        padding: 0 50px;
    }
`
export const Title = styled.h2`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    width: 100%;
    max-width: 1160px;
    text-align: left;
    font-size: 14px;
    padding-bottom: 24px;
    @media (min-width: 768px){
        font-size: 16px;
    }
    @media (min-width: 1200px){
       padding-bottom: 40px;
       font-size: 20px;
    }
`
export const Slide = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    width: 260px;
    height: 150px;
    margin-left: -130px;
    object-fit: cover;
    cursor: pointer;
    transition: all 0.5s ease;
    @media (min-width: 768px) {
        width: 320px;
        height: 180px;
        margin-left: -160px;
    }
    @media (min-width: 1200px) {
        width: 384px;
        height: 211px;
        margin-left: -192px;
    }
`