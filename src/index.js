import React,  { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Library from './Library'
import LearningReact from './LearningReact'

let bookList = [
  {"title": "Ayee", "author": "Alonso NInaya", "pages": 213},
  {"title": "The Sun Also Rises", "author": "Enest Hemingway", "pages": 260},
  {"title": "Testing", "author": "Enest Hemingway", "pages": 123},
  {"title": "Testing x2", "author": "Enest Hemingway", "pages": 214231360},
]

render(
  // <Library books={bookList}/>,
  <LearningReact />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
