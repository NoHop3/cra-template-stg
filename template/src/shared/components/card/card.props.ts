export interface CardProps {
  id: number;
  title: string;
  width: string;
  height: string;

  date?: string;
  padding?: string;
  imgSource?: string;
  description: string;
  isFavorite?: boolean;
  showFavorite?: boolean;
  disabledFavoriteButton?: boolean;

  onAddToFavoritesClick?: (id: number) => void;
  onCardClick?: (id: number) => void;
}
