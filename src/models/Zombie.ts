import Monster from '../interfaces/Monster';

export default class Zombie implements Monster {
  id: number;
  name: string;
  hunger = 50;
  feedText = 'Eat Brains';
  imgUrl: string;

  constructor({ id, name, imgUrl }: { id?: number, name: string, imgUrl: string }) {
    if (id) this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
  }
}
