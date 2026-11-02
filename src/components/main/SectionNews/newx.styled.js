import styled from "styled-components";

export const SectionNews = styled.div`
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px 40px;
    @media (min-width: 393px) {
        padding: 0 20px 48px;
    }
    @media (min-width: 768px) {
        padding: 0 50px 64px;
    }
    @media (min-width: 1200px) {
        padding: 0 0 80px;
    }
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1160px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
     @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 26px;
    }
`
export const Box = styled.div`
    max-width: 450px;
    @media (min-width: 768px) {
        width: calc((100% - 26px) / 2);
    }
    @media (min-width: 1200px) {
        width: 270px;
     }
`
export const Img = styled.img`
    width: 100%;
    height: 208px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
`
export const NewLink = styled.a`
    font-size: 16px;
    font-weight: 500;
`
export const BtnLoadMore = styled.button`
    margin-top: 40px;
    font-size: 12px;
    font-weight: 500;
    width: 120px;
    height: 40px;
    background-color: #FFB36C;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.1s ease;
    &:hover{
        background-color: #eb9d55;
    }
    @media (min-width: 768px) {
        width: 138px;
    }
`