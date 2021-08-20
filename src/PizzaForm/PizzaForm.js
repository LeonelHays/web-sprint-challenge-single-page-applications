import React, { useState, useEffect } from 'react'
import Pizza from './Pizza'
import PizzaForm2 from './PizzaForm2'

import schema from '../validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';



//default state
const initialFormValues = {
  size: '',
  sauce: '',
  toppings: '',
  substitute: '',
  instructions: '',
}
const initialFormErrors = {
  size: '',
  sauce: '',
  toppings: '',
  substitute: '',
  instructions: '',
}
const initialPizza = []
const initialDisabled = true

export default function App() {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  //Helpers
  const getOrder = () => {
    axios.get('https://reqres.in/api/orders')
    .then(res => {
      console.log(res)
      setPizza(res.data.data)
    }).catch(err => console.error(err))
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
       setPizza([res.data.data, ...pizza]);
    }).catch(err => console.error(err));

    setFormValues(initialFormValues);
  }
 
  //event handlers
  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }
  
  const inputChange = (name, value) => {
    console.log(name, value)
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: formValues.toppings,
      substitute: formValues.substitute,
      instructions: formValues.instructions
    }
    postNewOrder(newOrder);
  }

  //side effects
  useEffect(() => {
    getOrder()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">

     <PizzaForm2 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        initialPizza.map(pizza => {
          return (
            <Pizza key={pizza.id} details={pizza} />
          )
        })
      }
    </div>
  );
}