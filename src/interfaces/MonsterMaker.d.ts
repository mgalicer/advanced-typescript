import MonsterBase from './MonsterBase';
import Monster from './Monster';

export interface MonsterMakerState extends MonsterBase {
  selectedMonster: string;
}

export interface MonsterMakerProps {
  createMonster: (monster: Monster) => void;
}
