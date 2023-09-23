import React from 'react';
import classes from '../styles/Answers.module.css';
import classes1 from '../styles/Progressbar.module.css';
import classes2 from '../styles/Miniplayer.module.css';
import image from '../images/3.jpg';



export default function Quiz() {
  return (
    
      <>
        
    <main class="main">
      <div class="container">
        <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>
       
        <div className={classes.answers} >
          
          <label className={classes.answer} for="option1">
            <input type="checkbox" id="option1" />
            A New Hope 1
          </label>

          
          <label className={classes.answer} for="option2">
            <input type="checkbox" id="option2" />
            A New Hope 1
          </label>

          
          <label className={classes.answer} for="option3">
            <input type="checkbox" id="option3" />
            A New Hope 1
          </label>

          
          <label className={classes.answer}  for="option4">
            <input type="checkbox" id="option4" />
            A New Hope 1
          </label>

          
          <label className={classes.answer} for="option5">
            <input type="checkbox" id="option5" />
            A New Hope 1
          </label>

          
          <label className={classes.answer} for="option6">
            <input type="checkbox" id="option6" />
            A New Hope 1
          </label>

          
          <label className={classes.answer} for="option7">
            <input type="checkbox" id="option7" />
            A New Hope 1
          </label>

          
          <label className={classes.answer} for="option8">
            <input type="checkbox" id="option8" />
            A New Hope 1
          </label>

          
          <label className={classes.answer} for="option9">
            <input type="checkbox" id="option9" />
            A New Hope 1
          </label>

          
          <label className={classes.answer} for="option10">
            <input type="checkbox" id="option10" />
            A New Hope 1
          </label>
         
        </div>
        </div>
        </main>
        <div className={classes1.progressBar}>
          <div className={classes1.backButton}>
            <span class="material-icons-outlined"> arrow_back </span>
          </div>
          <div className={classes1.rangeArea}>
            <div className={classes1.tooltip}>24% Cimplete!</div>
            <div className={classes1.rangeBody}>
              <div className={classes1.progress} style={{width: '20%'}}></div>
            </div>
          </div>
          <a href="result.html">
            <button className="button next">
              <span>Next Question</span>
              <span class="material-icons-outlined"> arrow_forward </span>
            </button>
          </a>
        </div>

        <div className={`${classes2.miniPlayer} ${classes2.floatingBtn}`}>
          <span className={`material-icons-outlined ${classes2.open}`}> play_circle_filled </span>
          <span className={`material-icons-outlined ${classes2.close}`}> close </span>
          <img src={image} alt="" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>


         
       </>  

       )  
     
}
