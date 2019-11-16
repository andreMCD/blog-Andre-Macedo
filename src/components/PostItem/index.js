import React from "react"
import propTypes from "prop-types"

import * as S from "./styled"

const PostItem = ({ slug, border, title, date, timeToRead, description }) => (
  <S.PostItemLink border={border} to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDate>
        {date} - {timeToRead} min de leitura
      </S.PostItemDate>
      <S.PostItemDescription>{description}</S.PostItemDescription>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: propTypes.string.isRequired,
  border: propTypes.string,
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  timeToRead: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
}

export default PostItem
