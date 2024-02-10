import styled from 'styled-components'
import { Colors } from '../../styles'

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  h2 {
    font-size: 42px;
    margin-bottom: 80px;
  }
`
export const FormContainer = styled.form`
  max-width: 1024px;
  max-height: 550px;
  display: flex;
  flex-direction: column;
`
export const FormContent = styled.div`
  width: 550px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    color: ${Colors.fontColor};
    margin: 12px;
    padding: 12px;
    font-size: 24px;
    background-color: ${Colors.secondBgColor};
    border-radius: 36px;

    &:hover {
      box-shadow: 0 0 12px ${Colors.primaryBlueColor};
    }
  }

  textarea {
    width: 500px;
    height: 200px;
    padding: 12px;
    margin: 12px 0;
    font-size: 24px;
    background-color: ${Colors.secondBgColor};
    border-radius: 36px;
    color: ${Colors.fontColor};
    resize: none;
  }
`
export const FirtsInput = styled.div`
  display: flex;
  justify-content: space-evenly;
`
export const SecondInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BtnForm = styled.button`
  padding: 8px;
  width: 100px;
  height: 56px;
  background-color: ${Colors.primaryBlueColor};
  font-size: 20px;
  font-weight: 700;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 12px ${Colors.primaryBlueColor};
  }
`
