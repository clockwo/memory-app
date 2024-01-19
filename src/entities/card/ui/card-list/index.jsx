import { useState, useEffect } from 'react';
import fetchData from 'shared/Card/api/fetchData';
import Card from 'shared/Card/ui/Card';
import './styles.scss';

export const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const cards = await fetchData();
        setCards(cards.data.map((item) => item.link));
      } catch (error) {
        console.error('Fetch error: ', error);
      }
    };
    getCards();
  }, []);

  return (
    <>
      {cards.map((src, index) => {
        return <Card key={index} title="test" src={src} />;
      })}
    </>
  );
};
