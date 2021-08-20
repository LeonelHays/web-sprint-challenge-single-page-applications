import React from 'react'



export default function Home() {
  const routeToShop = () => {

  }

  return (
    <div className='home-wrapper'>
    {/*couldn't make the internal image work I got a new one*/}
      <img
        className='home-image'
        src='https://images.squarespace-cdn.com/content/v1/55c9f9bce4b0423ff5aafd5f/1616087279179-IE2UWO7ER0YHQZIF2111/hfhh.jpg?format=2500w'
        alt='a nice crispy pizza'
      />
      <button
        onClick={routeToShop}
        id='order-button'
      >
        Pizza?
      </button>
    </div>
  )
}