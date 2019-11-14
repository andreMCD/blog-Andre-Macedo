import styled from 'styled-components'


export const SocialLinksWrapper = styled.nav`
    width: 200px;
    margin: 0 0 1.5rem 0;
`

export const SocialLinksList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
    text-decoration: none;
    color: #1d2029;
    transition: 0.5s;

    &:hover {
        color: #393e46;
    }
`

export const IconWrapper = styled.div`
    fill: #00adb5;
    width: 30px;
    height: 30px;
`