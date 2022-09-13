import './../../styles/app.css'
import './../../styles/card.css'
import React, { useState } from 'react';
import { Card } from '../components/card';

function App() {

  const [count, setCount] = useState(0);

  function addToCart() {
    setCount(count +1);
  }

  return (
    <div className="app">
      <header className="app-header">
        <p>Component-Oriented Programming paradigm demo</p>
      </header>
      <main>
        <section className='cart'>
          <label className='cart-label'>Cart items count: </label>
          <label className='cart-label'>{count}</label>
        </section>
        <section className='container'>
          <article className='card'>
            <h1>item A</h1>
            <p>description A</p>
            <p>10 €</p>
            <button onClick={addToCart}>Add to Cart</button>
          </article>
          <article className='card'>
            <h1>item B</h1>
            <p>description B</p>
            <p>11 €</p>
            <button onClick={addToCart}>Add to Cart</button>
          </article>
          <article className='card'>
            <h1>item C</h1>
            <p>description C</p>
            <p>12 €</p>
            <button onClick={addToCart}>Add to Cart</button>
          </article>
          <Card name='item 1' description='description 1' price='1' onClick={addToCart}></Card>
          <Card name='item 2' description='description 2' price='2' onClick={addToCart}></Card>
          <Card name='item 3' description='description 3' price='3' onClick={addToCart}></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </section>
      </main>
    </div>
  );
}

export default App;