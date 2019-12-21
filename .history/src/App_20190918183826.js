//TODO: STEP 1 - Import the useState hook.
import React,{useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

const [homeScore, changeHomeScore] = React.useState(0);
const [awayScore, changeAwayScore] = React.useState(0);
const [homeTeam, homeTeamName] = React.useState("Home");
const [awayTeam, awayTeamName] = React.useState("Away");

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name"
            onClick={ () => {
              homeTeamName("Lions");
            }}
            onDoubleClick = { () => {
              homeTeamName("Home");
            }}
            >{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name" 
            onClick={ () => {
              awayTeamName("Tigers");
            }}
            onDoubleClick={ () => {
              awayTeamName("Away");
            }}
            >{awayTeam}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
          </div>
          <div className="bottomRow">
      {/* <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div> */}
      <div className="quarter">
        <h3 className="quarter__title">Half</h3>
        <div className="quarter__value" 
        onClick = { () => {
          changeHalf(2);
        }}
        onDoubleClick = { () => {
          changeHalf(1);
        }}
        >{half}</div>
      </div>
    </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown"
          onClick={ () => {
            changeHomeScore(homeScore + 1);
          }}
          >Home Goal</button>
          <button className="homeButtons__fieldGoal"
          onClick={ () => {
            changeHomeScore(homeScore + 1);
          }}>Home Penalty</button>
        </div>
        <div>
          <button >Half</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" 
          onClick= { () => {
            changeAwayScore(awayScore + 1);
          }}
          >Away Goal</button>
          <button className="awayButtons__fieldGoal"
          onClick= { () => {
            changeAwayScore(awayScore + 1);
          }}>Away Penalty</button>
        </div>
        
      </section>
    </div>
  );
}

export default App;
