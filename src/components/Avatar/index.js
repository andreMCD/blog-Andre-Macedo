import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

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
            <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} alt="Foto do meu perfil" />
    )
};

export default Avatar;
