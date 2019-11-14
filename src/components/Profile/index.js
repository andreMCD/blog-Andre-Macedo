import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar';

// Import all styles from alias S.
import * as S from './styled';


const Profile = () => {
    const {
        site: {
            siteMetadata: {
                title, position, description},
        },
    } = useStaticQuery(graphql`
        query ProfileMetadata {
            site {
                siteMetadata {
                    title
                    position
                    description
                }
            }
        }
    `)

    return (

    <S.ProfileWrapper>
        <Avatar />
        <S.ProfileTitle>{title}</S.ProfileTitle>
        <S.ProfileSubTitle>{position}</S.ProfileSubTitle>
        <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
    )
};

export default Profile;
