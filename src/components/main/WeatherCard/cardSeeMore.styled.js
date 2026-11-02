import styled from "styled-components";

export const CardMoreSection = styled.div`
    display: flex;
    justify-content: center;
`
export const CardMoreWrapper = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 250px;
    padding: 25px 35px;
    border-radius: 15px;
    gap: 30px;
    background-color: #E8E8E8;
    margin-bottom: 35px;
     @media (min-width: 393px) {
        width: 293px;
        padding: 35px 43px;
        gap: 35px;
    }
    @media (min-width:696px) {
        padding: 30px;
        width: 520px;
        gap: 15px;
    }
    @media (min-width: 768px) {
        padding: 30px;
        width: 634px;
        gap: 21px;
        margin-bottom: 50px;
    }
    @media (min-width: 1200px) {
        padding: 40px 57px;
        width: 1160px;
        gap: 70px;
        margin-right: 20px;
        margin-bottom: 80px;
    }
`
export const CardSeeMoree = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 207px;
    height: 160px;
    padding-top: 15px;
    border-radius: 10px;
    background-color: #D9D9D9;
    font-size: 10px;
    --icon-size: 60px;
    @media (min-width: 768px) {
        padding-top: 20px;
        font-size: 12px;
        width: 177px;
        height: 200px;
    }
    @media (min-width: 1200px) {
        font-size: 16px;
        width: 290px;
        height: 217px;
        --icon-size: 85px; 
    }
`
export const CardMoreP = styled.p`
    font-size: 14px;
    padding: 8px 0 18px;
    @media (min-width: 768px) {
        font-size: 16px;
        padding: 8px 0 37px;
    }
     @media (min-width: 1200px) {
        font-size: 32px;
        padding: 10px 0 23px;
    }
`