import React from 'react';
import Checkbox from './Checkbox';
import classes from '../styles/Answers.module.css';

export default function Answer() {
  return (
    <div className={classes.answers}>
        <Checkbox className={classes.answer} >
           
            A New Hope 1
        </Checkbox>
    </div>
  )
}
