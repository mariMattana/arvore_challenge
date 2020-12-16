import styled, { css } from 'styled-components'

export const Card = styled.div`
  padding: 15px 15px 0 15px;
  margin: 6%;
  margin-top: 0;
  border-radius: 6px;
  border: 1px solid lightgray;
  display: box;
  box-sizing: border-box;
  overflow: hidden;
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
export const DivScale = styled.div`
  float: right;
  display: block;
  color: #586069;
  margin-bottom: 10px;
`

export const SquareUl = styled.ul`
  position: relative;
  display: inline-block;
  margin: 0 5px;
  list-style: none;
  padding: 4px;
  padding-bottom: 15px;
`

export const Square = styled.li`
  display: inline-block;
  background: red;
  width: 18px;
  height: 18px;
  margin: 0 3px;
  box-shadow: inset 0 0 0 1px rgba(27,31,35,.04);
  ${props =>
    props.scaleOne &&
    css`
      background-color: #EEEEEE;
      }
    `}
  ${props =>
    props.scaleTwo &&
    css`
      background-color: #d6e685;
      }
    `}
  ${props =>
    props.scaleThree &&
    css`
      background-color: #8cc665;
      }
    `}
  ${props =>
    props.scaleFour &&
    css`
      background-color: #44a340;
      }
    `}
  ${props =>
    props.scaleFive &&
    css`
      background-color: #1e6823;
      }
  `}
`