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
                        fluid(maxWidth: 200, maxHeight: 200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )

    return (
        <S.AvatarWrapper>
            <Img fluid={avatarImage.childImageSharp.fluid} alt="Foto do meu perfil" />
        </S.AvatarWrapper>
    )
};

export default Avatar;
