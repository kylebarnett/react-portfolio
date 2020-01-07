import React from 'react';

import './Portfolio.css';
import lambda from '../../assets/lambda.png';
import coinpicture from '../../assets/coinpicture.png';
import recipe from '../../assets/recipe.jpg';

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <section className="portfolio-top">
        <p>One of our first projects at Lambda School was to build a simple landing page using HTML and CSS. We utilized the powers of flexbox to position all the content nicely. As simple as this project is, seeing your first project come alive was a great feeling.</p>
        <img src={lambda} alt="first-project" />
      </section>
      <section className="portfolio-middle">
        <img src={coinpicture} alt="coin-picture"/>
        <p>This exciting project, I utilized CoinPaprika's API to fetch a select number of coins using axios to display their rank and coin price. Semantic-UI-React was used to style the individual cards after I mapped over the data. React was used for the front-end library as well as Redux for state management.</p>
      </section>
      <section className="portfolio-bottom">
        <p>This full-stack project was built in a little under two weeks while attending Lambda School. I was the main front end engineer on the project that utilized React/Redux with styled components. For the best user experience, login with the username, user1, and the password, 12345.</p>
        <img src={recipe} alt="recipe-picture"/>
      </section>
      <section className="portfolio-footer">
        <p>Made by Kyle Barnett. Copyright 2019.</p>
      </section>
    </div>
  )
}