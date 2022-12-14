import React from 'react';
import { useState } from 'react';
import quotes from '../quotes.json';
import './QuoteBox.css';

export const QuoteBox = () => {
  let quotesClean = quotes.quotes;
  let classNames = ['blue', 'red', 'green'];

  let randomNumber = Math.floor(Math.random() * quotesClean.length);

  let randomClassName = Math.floor(Math.random() * classNames.length);

  const [index, setIndex] = useState(randomNumber);

  const [className, setClassName] = useState(classNames[randomClassName]);

  return (
    <div className={`${className} App`}>
      <main className='card shadow-drop-2-center'>
        <i className='card__quote fa-solid fa-quote-left'></i>
        <div className='card__text'>
          <p>{`"${quotesClean[index].quote}"`}</p>
          <h3 className='card__text-author'>~ {quotesClean[index].author}</h3>
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
          <i class='card__button-icon fa-solid fa-quote-right'></i>
        </button>
      </main>
    </div>
  );
};
