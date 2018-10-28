import * as React from 'react';
import { MonsterMakerProps, MonsterMakerState } from '../interfaces/MonsterMaker';
import Monster from '../interfaces/Monster';
import Vampire from '../models/Vampire';
import Zombie from '../models/Zombie';

class MonsterMaker extends React.Component<MonsterMakerProps, MonsterMakerState> {
  constructor(props: MonsterMakerProps) {
    super(props);
    this.state = {
      name: '',
      imgUrl: '',
      selectedMonster: 'Vampire',
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      selectedMonster,
      name,
      imgUrl
    } = this.state;

    if (selectedMonster === 'Vampire') {
      this.props.createMonster(
        new Vampire({
          name,
          imgUrl,
        })
      );
    } else if (selectedMonster === 'Zombie') {
      this.props.createMonster(
        new Zombie({
          name,
          imgUrl,
        })
      );
    }
  };

  handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleImgChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      imgUrl: event.currentTarget.value,
    });
  };

  handleMonsterChange = (event: React.FormEvent<HTMLSelectElement>) => {
    this.setState({
      selectedMonster: event.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        <select onChange={this.handleMonsterChange}>
          <option value="Vampire">Vampire</option>
          <option value="Zombie">Zombie</option>
        </select>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="name" onChange={this.handleNameChange} />
          <input type="text" name="imgUrl" placeholder="image url" onChange={this.handleImgChange} />
          <input type="submit" value="Create Monster" />
        </form>
      </div>
    );
  }
}

export default MonsterMaker;
