import { useState } from 'react';
import { StoryObj } from '@storybook/react';
import { Card } from './card';

export default {
  title: 'Card',
  // Though optional, `component` is required to fully populate ArgsTable
  component: Card,
};
type Story = StoryObj<typeof Card>;

export const CardStory: Story = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const cardProps = {
    date: 'Start: 29-10-2023',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgSource: 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
    isFavorite: false,
    title: 'The title of the activity',
    showFavorite: true,
    onAddToFavoritesClick: () => {
      alert('Add to favs clicked');
    },
  };
  return (
    <div style={{ maxWidth: 900, margin: '30px auto' }}>
      <Card
        key={'card1'}
        width="462px"
        height="200px"
        id={1}
        {...cardProps}
        description="This card is not showing favourite button"
        showFavorite={false}
      />
      <Card
        key={'card2'}
        width="462px"
        height="200px"
        id={2}
        {...cardProps}
        description="Really long description. In fact this description is taking so much space that it might be truncated... You never know? We shall see though, I am still typing and typing and typing and typing....... and typing. Oh you still here? Well yes - this description is in fact still going on. Let me tell you more about my day. I attended some groupmeeting today and was kind of productive but not really. I am still typing and typing and typing and typing....... and typing. Oh you still here? Well yes - this description is in fact still going on. Let me tell you more about my day. I attended some groupmeeting today and was kind of productive but not really. I am still typing and typing and typing and typing....... and typing. Oh you still here? Well yes - this description is in fact still going on. Let me tell you more about my day. I attended some groupmeeting today and was kind of productive but not really."
      />
      <Card
        key={'card3'}
        width="462px"
        height="200px"
        id={3}
        {...cardProps}
        title="Really long title. In fact, this title is kind of waaaaaaay to long. In fact it is waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay to long. It might get truncated."
        isFavorite={isFavorite}
        onAddToFavoritesClick={() => {
          setIsFavorite(!isFavorite);
        }}
        description="This card actually changes favourite state. Check it out by pressing on the favourite button. Pretty right??"
      />
      <Card
        width='462px'
        height='200px'
        key={'card4'}
        id={4}
        {...cardProps}
        imgSource=""
        isFavorite={true}
        title="This card has no image. Placeholder is placed."
      />
    </div>
  );
};

CardStory.storyName = 'Card';
