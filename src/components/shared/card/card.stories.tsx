import { StoryObj } from '@storybook/react';
import { Card } from './card.container';

export default {
  title: 'Card',
  // Though optional, `component` is required to fully populate ArgsTable
  component: Card,
};
type Story = StoryObj<typeof Card>;

export const CardStory: Story = () => {
  return (
    <div style={{ maxWidth: 900, margin: '30px auto' }}>
      <Card
        id={1}
        date="Start: 29-10-2023"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imgSource="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
        isFavorite={false}
        title="The title of the activity the title of the activity labore the title of the activity the title of the activity"
        showFavorite={true}
        onAddToFavoritesClick={() => {
          console.log('Add to favs clicked');
        }}
      />
      <Card
        id={1}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imgSource="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
        isFavorite={true}
        title="The title of the activity"
        showFavorite={true}
        onAddToFavoritesClick={() => {
          console.log('Add to favs clicked');
        }}
      />
      <Card
        id={1}
        date="Start: 29-10-2023"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isFavorite={false}
        title="The title of the activity"
        showFavorite={true}
        disabledFavoriteButton={true}
        onAddToFavoritesClick={() => {
          console.log('Add to favs clicked');
        }}
      />
    </div>
  );
};

CardStory.storyName = 'Card';
