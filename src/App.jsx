import { useState } from 'react';
import './App.css';
import quotes from './quotes.json';

function App() {
  let quotesClean = quotes.quotes;
  let classNames = ['blue', 'red', 'green'];

  let randomNumber = Math.floor(Math.random() * quotesClean.length);
  let randomClassName = Math.floor(Math.random() * classNames.length);
  const [index, setIndex] = useState(randomNumber);
  const [className, setClassName] = useState(classNames[randomClassName]);

  return (
    //
    <div className={`${className} App`}>
      <main className='card'>
        <i className='card__quote fa-solid fa-quote-left'></i>
        <div className='card__text'>
          <p>{quotesClean[index].quote}</p>
          <h3 className='card__text-author'>- {quotesClean[index].author}</h3>
        </div>
        <button
          className='card__button'
          onClick={() => {
            setIndex(Math.floor(Math.random() * quotesClean.length));
            setClassName(
              classNames[Math.floor(Math.random() * classNames.length)]
            );
          }}
        >
          <i className='card__button-icon fa-solid fa-shuffle'></i>
        </button>
      </main>
    </div>
  );
}

export default App;
