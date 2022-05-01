import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  min-height: 100vh;
  font-family: 'Roboto';
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Img = styled.img`
  width: 100px;
`

export const Paragraph = styled.p`
  color: #e2e8f0;
  font-size: 18px;
  font-family: 'Roboto';
  margin-top: 25px;
  margin-bottom: 100px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 70px;
    line-height: 1.5;
  }
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #06b6d4;
  font-size: 18px;
  font-weight: 500;
  border-radius: 15px;
  margin-top: 100px;
  padding: 12px 24px;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-top: 70px;
  }
`
