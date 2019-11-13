import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import * as S from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-photo.jpg"}) {
                    childImageSharp {
                        fixed(width: 150, height: 150) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )

    return (
        <S.AvatarWrapper>
            <Img fixed={avatarImage.childImageSharp.fixed} alt="Foto do meu perfil" />
        </S.AvatarWrapper>
    )
};

export default Avatar;
