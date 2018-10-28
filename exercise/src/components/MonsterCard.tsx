import * as React from 'react';
import Monster from '../interfaces/Monster';

interface MonsterCardProps {
  monster: Monster;
  feedMonster: (monster: Monster) => void;
}
export default function MonsterCard({ monster, feedMonster }: MonsterCardProps) {
  const handleClick = () => {
    feedMonster(monster);
  }

  return (
    <div>
      <h2>{ monster.name }</h2>
      <img src={ monster.imgUrl } />
      <p>Hunger: { monster.hunger }</p>
      <button onClick={ handleClick }>{ monster.feedText }</button>
    </div>
  );
};
