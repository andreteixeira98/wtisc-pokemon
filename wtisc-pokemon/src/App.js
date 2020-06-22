import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import Home from './componentes/Home'
import Pokedex from './componentes/Pokedex/Pokedex'
import Pokeball from './componentes/Pokeball/Pokeball'
import PokeArena from './componentes/PokeArena/PokeArena'
export default class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light  bg-light'>
            <Link to={'/'} className='navbar-brand'>Pokemon-WTISC</Link>
            <div className='collapse navbar-collapse' id='navbarSuportedContent'>
              <ul className='navbar-nav mr-auto'>
                <Link to ={'/'}><li className='nav-link'>Home</li></Link>
                <Link to ={'/pokedex'}><li className='nav-link'>Pokedex</li></Link>
                <Link to ={'/pokeball'}><li className='nav-link'>Pokeball</li></Link>
                <Link to ={'/pokeArena'}><li className='nav-link'>PokeArena</li></Link>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route path='/' component ={Home}></Route>
            <Route path='/pokedex' component={Pokedex}></Route>
            <Route path='/pokeball' component={Pokeball}></Route>
            <Route path='/pokeArena' component={PokeArena}></Route>


          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}