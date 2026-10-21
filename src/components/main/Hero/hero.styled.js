import styled from "styled-components";
import hero from  "../../../img/hero.jpg"
import search from "../../../img/search.svg"

export const HeroWrapper = styled.section`
  height: 345px;
  display: flex;
  justify-content: center;
  background: url(${hero}) center / cover no-repeat;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  padding: 50px 20px 100px;
  @media (min-width: 768px) {
    padding: 40px 0 0 0 ;
  }
  @media (min-width: 1200px) {
    height: 595px;
    padding: 100px 0 0 ;
  }
`
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h1`
  padding-bottom: 35px;
  letter-spacing: .4px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  @media (min-width: 768px){
    font-size: 20px;
    padding-bottom: 40px;
  }
  @media (min-width: 1200px){
    font-size: 40px;
    padding-bottom: 80px;
  }
`
export const TextContainer = styled.div`
  padding-bottom: 48px;
  display: grid;
  column-gap: 25px;
  grid-template-columns: 2px auto;
  max-width: 163px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2px 1fr;
    max-width: 100%;
    column-gap: 34px;
  }
  @media (min-width: 1200px) {
    padding-bottom: 80px;
  }
`
export const Text = styled.p`
  line-height: 12px;
  padding-bottom: 20px;
  grid-column: 2;
  grid-row: 1;
  font-size: 10px;
   @media (min-width: 768px) {
    line-height: 17px;
    font-size: 14px;
    width: 172px;
    grid-column: 1;
    grid-row: 1;
    text-align: right;
  }
  @media (min-width: 1200px) {
    text-align: center;
    line-height: 29px;
    width: 345px;
    font-size: 24px;
  }
`
export const Line = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  width: 2px;
  height: 80px;
  background-color: #fff;
  @media (min-width: 768px) {
    height: 110px;
    grid-column: 2;
    grid-row: 1;
  }
  @media (min-width: 1200px) {
    height: 144px;
    width: 3px;
  }
`
export const DateBox = styled.div`
 line-height: 12px;
  margin-top: -5px;
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 17px;
    grid-column: 3;
    grid-row: 1;
    margin-top: 0;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 29px;
  }
`
export const Form = styled.form`
  display: flex;
  align-items: center;
`
export const Input = styled.input`
 padding: 4px 10px;
  width: 174px;
  height: 15px;
  font-size: 6px;
  color: #878787;
  background-color: #D9D9D9;
  border: none;
  border-radius: 5px 0 0 5px;
  &:focus {
    outline: 1px solid #dbdbdb;
  }
  @media (min-width: 768px){
    width: 402px;
    height: 27px;
    font-size: 10px;
    border-radius: 10px 0 0 10px;
  }
  @media (min-width: 1200px){
    width: 625px;
    height: 42px;
    font-size: 14px;
  }
`
export const SearchBtn = styled.button`
  width: 16px;
  height: 15px;
  background: url(${search}) no-repeat center;
  background-size: 9px; 
  background-color: rgb(255, 179, 108);
  border-left: 3px solid #000000; 
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.1s ease;
  &:hover{
    background-color: #eb9d55;
  }
  @media (min-width: 768px){
    width: 29px;
    height: 27px;
    border-radius: 0 10px 10px 0;
    background-size: 16px;
  }
  @media (min-width: 1200px){
    width: 45px;
    height: 42px;
    background-size: 25px;
  }
`
