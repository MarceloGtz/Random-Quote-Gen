import { useState } from 'react';
import './App.css';
import quotes from './quotes.json';

function App() {
  let quotesClean = quotes.quotes;
  let colors = ['#252A34', '#08D9D6', '#FF2E63'];

  let randomNumber = Math.floor(Math.random() * quotesClean.length);
  let randomColor = Math.floor(Math.random() * colors.length);
  const [index, setIndex] = useState(randomNumber);
  const [color, setColor] = useState(colors[randomColor]);

  return (
    <div className='App' style={{ background: color }}>
      <main className='card'>
        <i
          style={{ color: color }}
          className='card__quote fa-solid fa-quote-left'
        ></i>
        <div className='card__text'>
          <p style={{ color: color }}>{quotesClean[index].quote}</p>
          <h3 className='card__text-author' style={{ color: color }}>
            - {quotesClean[index].author}
          </h3>
        </div>
        <button
          style={{ background: color }}
          className='card__button'
          onClick={() => {
            setIndex(Math.floor(Math.random() * quotesClean.length));
            setColor(colors[Math.floor(Math.random() * colors.length)]);
          }}
        >
          <i className='card__button-icon fa-solid fa-shuffle'></i>
        </button>
      </main>
    </div>
  );
}

export default App;
