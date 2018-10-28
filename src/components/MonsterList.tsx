import * as React from 'react';
import Monster from '../interfaces/Monster';
import MonsterCard from './MonsterCard';

interface MonsterListProps {
  monsters: Monster[];
  feedMonster: (monster: Monster) => void;
}

export default function MonsterList({ monsters, feedMonster }: MonsterListProps) {
  const monsterCards = monsters.map((monster, i) => {
    return <MonsterCard key={ i } monster={ monster } feedMonster={ feedMonster } />
  });
  return (
    <div>
      {monsterCards}
    </div>
  );
};
