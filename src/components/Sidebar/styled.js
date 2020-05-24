import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  background: white;
  height: 100%;
  border-radius: 20px;
  margin: 50px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.145733);
`

export const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
  }
`

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #ecf0f3;
  border: none;
  display: flex;
  justify-content: center;

  svg {
    height: 35px;
    width: 35px;
    color: #92a3af;
  }
`