import React, { useState, useEffect } from "react"
import { Route, Link, Switch } from 'react-router-dom'

import Home from './Home'
import PizzaForm from './PizzaForm/PizzaForm'
import { assertExpressionStatement } from "@babel/types"

import axios from 'axios'



const App = (props) => {
  const [stock, setStock] = useState([])

  useEffect(() => {
     axios.get(`https://reqres.in/api/orders`)
     .then(res => setStock(res.data.data))
     .catch(err => console.error(err))
  }, []) 
  return (
    <div className='App'>
      <h1 className='header'>Lambda Eats</h1>
      <div>
          <Link to="/">Home</Link>
          <br/>
          <Link to='/pizza'>Pizza?</Link>
      </div>
    
    <Switch>
     <Route path="/pizza">
       <PizzaForm items={stock} />
     </Route>
     <Route path="/">
       <Home/>
     </Route>
    </Switch>
    </div>
  );
};
export default App;
//this feels like a mess