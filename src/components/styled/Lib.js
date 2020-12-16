import styled, { css } from 'styled-components'

export const Card = styled.div`
  padding: 10px;
  margin: 6%;
  margin-top: 0;
  border-radius: 6px;
  border: 1px solid lightgray;
  display: box;
  box-sizing: border-box;
`

export const Content = styled.div`
  padding: 10px;
  margin: 6%;
  font-family: arial, sans-serif;
  line-height: 30px;
`

export const Title = styled.h2`
  margin-left: 6%;
  font-size: 20px;
  font-weight: 400!important;
`
export const Button = styled.button`
  position: relative;
  display: block;
  padding: 8px 16px;
  margin-bottom: 4px;
  overflow: hidden;
  color: #586069;
  background: #FFF;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  margin-left: 6%;
  outline: none;
  font-size: 1.1rem;
  :hover {
    cursor: pointer;
  }
  ${props =>
    props.selected &&
    css`
      color: #FFFFFF;
      background-color: #1566D6;
      }
    `}
`