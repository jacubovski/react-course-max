import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Breno'},
      {name: 'Jessica'},
      {name: 'Bruna'},
    ],
    showPerson: false,
  }
  nameChangeHandler =  (newName, name) => {
    const persons = [...this.state.persons]
    const idx = persons.findIndex(p => p.name === name)
    persons[idx].name = newName
    this.setState({ persons })
  }
 
  togglePersonHandler = () => this.setState({showPerson: !this.state.showPerson})

  deletePersonHandler = (idx) => {
    const newPersons = [...this.state.persons]
    newPersons.splice(idx, 1)
    this.setState({persons: newPersons})
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    let persons = null
    if(this.state.showPerson) {
      persons = (<div>
        {this.state.persons.map((person, idx) =>
          <Person key={idx}
          idx={idx}
          name={person.name}
          changeHandler={this.nameChangeHandler}
          click={this.deletePersonHandler}
          />
        )}
      </div>)
    } else {
      style.backgroundColor = 'red'
    }

    const classes = []
    if (this.state.persons.length <= 2) classes.push('red')
    if (this.state.persons.length <= 1) classes.push('bold')

    return (
        <div className="App">
          <h1>Hi, i'm react App</h1>
          <p className={classes.join(' ')}>this is really working</p>
          <button style={style} onClick={() => this.togglePersonHandler()}>Toggle Person</button>
          {persons}
        </div>
    )
  }
}
export default App;
