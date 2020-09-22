import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '코오딩',
  'birthday' : '999999',
  'gender' : '남'
 },
 {
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '뚜벅이',
  'birthday' : '878888',
  'gender' : '남'
 },
 {
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '메롱',
  'birthday' : '567890',
  'gender' : '남'
 }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                />
            )
          })
        }
      </div>
    );
  }
}


export default App;
