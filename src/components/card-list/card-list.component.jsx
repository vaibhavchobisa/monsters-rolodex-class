import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

// Components re-render based on two conditions, when setState() gets called, 
// (probably not true->) and when props are updated.

class CardList extends Component {
    render() {
        // console.log('render from CardList')
        // console.log(this.props)
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {
                    monsters.map((monster) => {
                        return (
                            <Card monster={monster} key={monster.id} />
                        );
                    })
                }
            </div>
        );
    }
}

export default CardList;