interface MyMonsterBase {
  name: string;
  imgUrl: string;
}

interface MyMonster extends MyMonsterBase {
  id?: number;
  hunger: number;
  feedText?: string;
}

class MyZombie implements MyMonster {
  name: string;
  imgUrl: string;
  hunger = 50;
};
