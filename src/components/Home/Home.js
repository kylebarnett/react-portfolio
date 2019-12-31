import React from 'react';
import './Home.css';
import headshot from '../../assets/headshot.jpg';

import Typist from 'react-typist';

export default function Home() {
  return (
    <div className="home-container">
      <section className="home-top">
        <Typist cursor={{ show: false }}><h1>Hi, my name is Kyle!</h1>
          <p>Full-Stack Web Developer based in Salt Lake City.</p></Typist>
        <p>I believe in creating simple applications that are pleasing to the eye. In today's day and age, we are constantly bombarded with information overload. The simpler, the better.</p>
        <img src={headshot} alt="picture" />
      </section>
      <section className="home-middle">
        <p>More info</p>
      </section>
      <section className="home-bottom">
        <p>Skills Icons</p>
      </section>
      <footer>
        <p>Made by Kyle Barnett. Copyright 2019.</p>
      </footer>
    </div>
  )
}