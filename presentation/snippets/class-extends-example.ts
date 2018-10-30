class MyBloodsucker {
  pintsConsumed = 0;
};

class MyVampire extends MyBloodsucker {
  name: string;
  imgUrl: string;
  hunger = 50;
};

const dracula = new MyVampire();
dracula.pintsConsumed // 0
