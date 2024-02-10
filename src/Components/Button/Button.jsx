import React from 'react'
import {MdMessage} from 'react-icons/md';
import styles from './Button.module.css';

const Button = (props) => {
    const {isOutline, icon, text , ...rest} = props;  // this is called destructuring the props. we don't need to use props.isOutline , propss.text anymore.
    // we have applied rest to apply that onClick property. 
  return (
      // <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
      <button {...rest} 
      className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {/* {props.icon} */}
        {icon}
        {/* {props.text} */}
        {text}
      </button>
  )
}

export default Button

//  <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}> this means the buttons 
// having isOutline true, to them, style.Outline_btn css will be applied else normal primary one
// will be applied. 
