import * as React from 'react';

// Components
import MonsterMaker from '../components/MonsterMaker';
import MonsterList from '../components/MonsterList';

// Interfaces
import MonstersAppState from '../interfaces/MonstersAppState';
import Monster from '../interfaces/Monster';

class MonstersApp extends React.Component<{}, MonstersAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      monsters: [],
    };
  }

  createMonster = (monster: Monster) => {
    const { monsters } = this.state;
    monster.id = monsters.length;
    monsters.push(monster);
    this.setState({ monsters });
  };

  feedMonster = (monster: Monster) => {
    const { monsters } = this.state;
    if (typeof monster.id !== 'undefined') {
      monsters[monster.id].hunger -= 10;
    }
    this.setState({ monsters });
  }

  render() {
    const { monsters } = this.state;
    return (
      <div>
        <h1>My Monsters</h1>
        <MonsterMaker createMonster={this.createMonster} />
        <MonsterList monsters={monsters} feedMonster={this.feedMonster} />
      </div>
    );
  };
};

export default MonstersApp;
