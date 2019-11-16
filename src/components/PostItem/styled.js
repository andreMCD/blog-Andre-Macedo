import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: #393e46;
  display: inline-block;
  margin: 2rem 1rem 0 1rem;
  width: 30%;
  text-decoration: none;

  border: 1px solid #1d2029;

  &:hover {
    color: #00adb5;
    border: 1px solid ${props => props.border ? props.border : "#00adb5"};
  }
`

export const PostItemWrapper = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2rem 2rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`

export const PostItemDate = styled.time`
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
`

export const PostItemDescription = styled.p`
  font-size: 1rem;
`
