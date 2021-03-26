import {Component} from 'react'
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';
import React from 'react';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters :[],
      cautare: ''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(raspuns => raspuns.json())
   .then(users => this.setState({monsters: users}))
    
    
  }
  handleChange =(e) => {
    this.setState({cautare: e.target.value})
  }
  render()  {
    const { monsters, cautare} =this.state; //noile constante sunt copi ale state ului initial
    const monstriiFiltrati = monsters.filter(monster=> 
      monster.name.toLowerCase().includes(cautare.toLowerCase())
      );
      //filter are 2 argumente, primul contine informatiile, al doilea seteaza o regula, rezultat true or false
      //functia includes() ->se verifica daca numele monstrului se gaseste in variabila searchfield
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder = 'Search monster'
        handleChange ={this.handleChange}
        />
        <CardList monsters = {monstriiFiltrati} > </CardList>
       
      </div>
    );
  }
}

export default App;


