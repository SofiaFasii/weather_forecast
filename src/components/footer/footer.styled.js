import styled from "styled-components";

export const FooterWrap = styled.footer`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 12px;
  background: #ffb26b;
  margin-top: 50px;
  padding:  30px 50px;
  @media (min-width: 393px){
    padding: 35px 50px ;
  }
  @media (min-width: 768px){
    padding-left: 100px;
  }
  @media (min-width: 1200px){
    padding: 40px 0 64px 150px;
  }
`
export const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 480px;
  p{
    padding-bottom: 15px;
  }
  a{
    font-size: 8px;
  }
  @media (min-width: 768px){
    p{
        font-size: 14px;
    }
    a{
        font-size: 10px;
    }
  }
  @media (min-width: 1200px){
    max-width: 548px;
    p{
        font-size: 16px;
        padding-bottom: 10px;
    }
    a{
        font-size: 12px;
    }
  }
`
export const Logo = styled.img`
  width: 50px;
  @media (min-width: 768px){
    width: 58px;
  }
  @media (min-width: 1200px){
    width: 90px;
  }
`
export const AddressBlock = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContactBlock = styled.div`
    flex-direction: column;
    p{
        text-align: center;
    }
    @media (min-width: 768px){
    p{
        text-align: left;
    }
  }
`
export const Socials = styled.div`
  display: flex;
  gap: 10px;
  @media (min-width: 393px){
    gap: 20px;
  }
  @media (min-width: 768px){
    img{
        width: 40px;
    }
  }
`;