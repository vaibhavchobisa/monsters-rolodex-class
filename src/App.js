import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    // console.log('constructor');
    super();

    this.state = {
      // {name: { firstName: 'Vaibhav', lastName: 'Chobisa' }, company: 'ZTM'}
      // In JS variables/objects are locally scoped, to enable universal use, store them in 'state'
      monsters: [],
      searchField: '',
    }
  }

  // This is a React function.
  componentDidMount() {
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      }
        // ,
        //   () => { console.log(this.state) }
      ));
  }

  // This function has been written to make the SPA more performant.
  // It's executed only once here then just being pointed at, on the
  // contrary of an anonymous function being written which is rendered again and again.
  onSearchChange = (event) => {
    // console.log('OnSearchChange');
    const searchField = event.target.value.toLocaleLowerCase();

    // Whenever setState() is called, render() gets called again.
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    // console.log('render from App');
    // Running console.log() for the three functions, it is clear that the render() function
    // runs again after componentDidMount() function runs.
    // This is called Re-Rendering.

    //Destructuring to make code cleaner 
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
      // includes() method is case-sensitive
    });

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        {/* User made components (like CardList) are capitalized unlike inbuilt HTML like JSX components. */}
        <SearchBox
          onChangeHandler={onSearchChange}
          className='monsters-search-box'
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
}

export default App;