interface MyMonster {
  name: string;
  hunger: number;
}

// Using the 'implements' keyword
class MyVampire implements MyMonster {
  name: string;
  hunger = 100;
};
