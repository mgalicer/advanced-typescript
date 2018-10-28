import MonsterBase from './MonsterBase';

export default interface Monster extends MonsterBase{
  id?: number;
  hunger: number;
  feedText?: string;
}
