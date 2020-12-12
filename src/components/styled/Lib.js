import styled, { css } from 'styled-components'

export const Card = styled.div`
  padding: 10px;
  border: 2px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`

export const Content = styled.div`
  padding: 10px;
  font-family: arial, sans-serif;
  line-height: 30px;
`

export const Photo = styled.div`
  opacity: 0.5;
  align-self: flex-start;
  margin: 25px;
  min-width: 150px;
  max-width: 300px;
  height: 150px;
  padding: 20px;
  border: 2px solid purple;
  background-color: lightblue;
  font-family: courier, serif;
  border-radius: 10px;
  text-align: center;
`

export const Section = styled.div`
  max-width: 800px;
  padding: 20px;
`

export const Title = styled.h1`
  color: purple;
  font-size: 1.5rem;
`
export const Button = styled.button`
  background: lightgray;
  outline: none;
  font-size: 1.1rem;
  padding: 0.5rem;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: white;
    background: darkgray;
  }
  ${props =>
    props.submit &&
    css`
      background-color: lightgreen;
      color: darkgreen;
      :hover {
        color: lightgreen;
        background: darkgreen;
      }
    `}
  ${props =>
    props.cancel &&
    css`
      background-color: pink;
      color: red;
      :hover {
        background-color: red;
        color: pink;
      }
    `}
`