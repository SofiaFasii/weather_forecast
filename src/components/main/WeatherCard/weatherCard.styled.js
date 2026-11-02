import styled from "styled-components";

export const CardsSection = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 15px;
`
export const CardsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: center;
    gap: 35px;
    padding: 35px 0;
    width: 100%;
    @media (min-width: 393px) {
        grid-template-columns: repeat(auto-fill, 300px);
    }
    @media (min-width: 768px) {
        gap: 50px;
        padding: 50px 0;
        max-width: 900px;
    }
    @media (min-width: 1200px) {
        gap: 120px;
        padding: 60px 0 80px;
        max-width: 1170px;
        margin-right: 15px;
    }
`
export const Card = styled.div`
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #E8E8E8;
    border-radius: 20px;
    padding: 15px;
    width: 250px;
    height: 350px;
    font-size: 12px;
    font-weight: 500;
    @media (min-width: 393px){
        width: 293px;
        height: 392px;
    }
    @media (min-width: 1200px){
        width: 320px;
        height: 430px;
        font-size: 14px;
        padding: 20px 30px;
    }
`
export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
export const CardTime = styled.p`
    padding: 25px 0 11px 0;
    font-size: 20px;
    letter-spacing: 1px;
    @media (min-width: 1200px){
        font-size: 24px;
        padding: 20px 0 15px;
    }
`
export const ForecastTabs = styled.div`
    display: flex;
    justify-content: center;
    gap: 21px;
`
export const ForecastBtn = styled.button`
    background-color: #FFB36C;
    padding: 6px 12px;
    border-radius: 5px;
    font-size: 9px;
    border: none;
    cursor: pointer;
    transition: background-color 0.1s ease;
    &:hover{
        background-color: #eb9d55;
    }
    @media (min-width: 1200px){
        font-size: 10px;
        padding: 8px 18px;
        border-radius: 10px;
    }
`
export const CardDateRow = styled.div`
    margin-right: 14px;
    padding: 12px 0 4px 0;
    display: flex;
    justify-content: center;
    gap: 14px;
    @media (min-width: 1200px){
        padding: 15px 0 4px;
    }
`
export const CardCurrent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    padding-bottom: 45px;
    @media (min-width: 1200px){
        font-size: 32px;
        padding-bottom: 40px;
    }
`
export const Line = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: flex;
    }
`
export const WeatherIcon = styled.img`
    width: 95px;
    @media(min-width: 393px){
        width: 130px;
    }
    @media (min-width: 1200px){
        width: 140px;
    }
`
export const CardActions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media (min-width: 1200px){
        gap: 24px;
    }
`
export const MoreBtn = styled.button`
    background-color: #FFB36C;
    padding: 8px 20px;
    border-radius: 5px;
    font-size: 9px;
    border: none;
    cursor: pointer;
    transition: background-color 0.1s ease;
    &:hover{
        background-color: #eb9d55;
    }
    @media (min-width: 1200px){
        font-size: 10px;
        padding: 8px 25px;
        border-radius: 10px;
    }
`
export const IconBtn = styled.button`
    font-size: 18px;
    border: none;
    background: none;
    cursor: pointer;
    @media(min-width: 393px){
        font-size: 24px;
    }
    @media (min-width: 1200px){
        font-size: 30px;
    }
`