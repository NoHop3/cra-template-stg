import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

import { LazyImage, NoImage } from '../../../shared/utils/helpers';
import { CardProps } from './card.props';
import {
  AddToFavoritesButton,
  ContentHolder,
  ImageContainer,
  ItemDescription,
  ItemImageWrapper,
  ItemTitle,
  ItemTitleHolder,
  CardWrapper,
  ItemDate,
} from './card.styles';

export const Card = React.memo((props: CardProps) => {
  return (
    <CardWrapper>
      <ItemImageWrapper>
        <ImageContainer
          data-search-result-image
          onClick={() => {
            props.onCardClick?.(props.id);
          }}>
          {props.imgSource ? <LazyImage src={props.imgSource} /> : <NoImage iconSize={80} />}
        </ImageContainer>
        {props.showFavorite && (
          <AddToFavoritesButton
            type="button"
            disabled={!!props.disabledFavoriteButton}
            onClick={(e: React.MouseEvent) => {
              props.onAddToFavoritesClick?.(props.id);
              e.stopPropagation();
            }}>
            <FontAwesomeIcon icon={props.isFavorite ? faHeartSolid : faHeart} />
          </AddToFavoritesButton>
        )}
      </ItemImageWrapper>
      <ContentHolder>
        <ItemTitleHolder>
          <ItemTitle>{props.title}</ItemTitle>
          <ItemDate>{props.date}</ItemDate>
        </ItemTitleHolder>
        <ItemDescription>{props.description}</ItemDescription>
      </ContentHolder>
    </CardWrapper>
  );
});
