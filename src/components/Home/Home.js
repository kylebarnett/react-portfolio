import React from 'react';
import './Home.css';
import headshot from '../../assets/headshot.jpg';
import javascript from '../../assets/javascript.png';
import html from '../../assets/html5.png';
import css from '../../assets/css3.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import node from '../../assets/node.png';

import Typist from 'react-typist';

export default function Home() {
  return (
    <div className="home-container">
      <section className="home-top">
        <Typist cursor={{ show: false }}><h1>Hi, my name is Kyle Barnett!</h1>
          <p>Full-Stack Web Developer based in Salt Lake City.</p></Typist>
        <p className="home-description">I believe in creating simple applications that are pleasing to the eye. In today's day and age, we are constantly bombarded with information overload. In my opinion, the simpler, the better. I'm a curious individual with a passion for learning new technologies. A big focus of mine, currently, is blockchain technology and how it could shape the future.</p>
        <img className="headshot" src={headshot} alt="headshot" />
      </section>
      <section className="home-bottom">
        <h1>Skills</h1>
        <div className="icon-container">
          <img src={javascript} alt="js-icon" />
          <img src={html} alt="html-icon" />
          <img src={css} alt="css-icon" />
          <img src={react} alt="react-icon" />
          <img src={redux} alt="redux-icon" />
          <img src={node} alt="node-icon" />
        </div>
      </section>
      <footer>
        <p>Made by Kyle Barnett. Copyright 2019.</p>
      </footer>
    </div>
  )
}