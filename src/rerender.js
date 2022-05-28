import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import Open from './Open/Open';
import state, { cleanPost } from './redux-store/redux-store';
import {addPost } from './redux-store/redux-store';


export let  rerenderEntireTree=()=>{ ReactDOM.render(
  <BrowserRouter>
  
    <App  state={state} addPost={addPost} cleanPost={cleanPost}  />
  </BrowserRouter>,document.getElementById('root')
);}

 




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

