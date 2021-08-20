import React from 'react'


export default function PizzaForm(props) {
  const {
      values,
      submit,
      change,
      disabled,
      errors,
  } = props

  const onSubmit = evt => {
      evt.preventDefault()
      submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change( name, valueToUse );
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
            <h2>Build Your Own Pizza</h2>

            

            <div className='errors'>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
                <div>{errors.toppings}</div>
                <div>{errors.substitute}</div>
                <div>{errors.instructions}</div>
            </div>
        </div>

        <div className='pizza-order inputs'>
         <h4>Build Your Own Pizza</h4>

         <label id='size-dropdown'>Size&nbsp;
         <select value={values.size} name="size" onChange={onChange}>
                 <option value=''>-- Select a Size --</option>
                 <option value='Small'>Small</option>
                 <option value='Medium'>Medium</option>
                 <option value='Large'>Large</option>
                 <option value='ExtraLarge'>Extra Large</option>
                 <option value='EXTRA-THICC'>EXTRA THICC</option>
                </select>
        </label>
       <div className='sauce'>
        <label>
            Original Red
          <input
            type='radio'
            name='sauce'
            value='red'
            onChange={onChange}
            checked={values.sauce === 'red'}
          />
        </label>

        <label>
            Garlic Ranch
          <input
            type='radio'
            name='sauce'
            value='ranch'
            onChange={onChange}
            checked={values.sauce === 'ranch'}
          />
        </label>

        <label>
            BBQ Sauce
          <input
            type='radio'
            name='sauce'
            value='BBQ'
            onChange={onChange}
            checked={values.sauce === 'BBQ'}
          />
        </label>

        <label>
            Spinach Alfredo
          <input
            type='radio'
            name='sauce'
            value='Alfredo'
            onChange={onChange}
            checked={values.sauce === 'Alfredo'}
          />
        </label>
       </div>
       <div className='toppings'>
           <label>Pepperion
               <input
                 type="checkbox"
                 name='pepperoni'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Sausage
               <input
                 type="checkbox"
                 name='sausage'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Canadian Bacon
               <input
                 type="checkbox"
                 name='bacon'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Spicy Italian Sausage
               <input
                 type="checkbox"
                 name='spicy'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Grilled Chicken
               <input
                 type="checkbox"
                 name='chicken'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Onions
               <input
                 type="checkbox"
                 name='onions'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Green Pepper
               <input
                 type="checkbox"
                 name='green'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Diced Tomatos
               <input
                 type="checkbox"
                 name='tomatos'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Black Olives
               <input
                 type="checkbox"
                 name='olives'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Roasted Garlic
               <input
                 type="checkbox"
                 name='garlic'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Artichoke Hearts
               <input
                 type="checkbox"
                 name='artichoke'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Three Cheese
               <input
                 type="checkbox"
                 name='cheese'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Pineapple
               <input
                 type="checkbox"
                 name='pineapple'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>

           <label>Extra Cheese
               <input
                 type="checkbox"
                 name='Extra'
                 checked={values.toppings}
                 onChange={onChange}
               />
           </label>
       </div>

       <div className="substitute">
       <label><span>Gluten Free Crust (+$1.00)</span>
               <input
                 type="checkbox"
                 name='yes'
                 checked={values.substitute}
                 onChange={onChange}
               />
           </label>           
       </div>

       <div id='special-text'>
        <label>
         <input
           type="text"
           name="instructions"
           value={values.instructions}
           onChange={onChange}
           placeholder="Anything else you'd like to add?"
          />
         </label>
       </div>
        <button id='submitBtn' disabled={disabled}> add to Order</button>
        
         </div>
    </form>
  )
}