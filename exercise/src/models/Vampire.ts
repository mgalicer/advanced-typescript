import Monster from '../interfaces/Monster';

export default class Vampire implements Monster {
  id: number;
  name: string;
  hunger = 100;
  feedText = 'Suck Blood';
  imgUrl: string;

  constructor({ id, name, imgUrl }: { id?: number, name: string, imgUrl: string }) {
    if (id) this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
  }
}
