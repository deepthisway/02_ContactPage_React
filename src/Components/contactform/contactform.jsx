import React, { useState } from "react";
import styles from "./contactform.module.css";
import Button from "../Button/Button";
import { MdContactSupport, MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const contactform = () => {
  const[name, setName]= useState("Name");   // now each time we have to pass the value to setName fxn, then that value will be set in name
  // that will be done when we will use this setName fxn in Submit button fxn because that renders the values. and pass event.target[0].value to the argument of setName fxn 

  const[email, setEmail]= useState("Email");
  const[notes, setNotes]= useState("Notes");

  const onViaCall = () => {
      console.log("I clicked VIA CALL!!")
  }   // this fnx cant be applied directly to <Button/> as the property must be passed to the real component <button></button>
      // for that purpose, we will be using rest operator.
  const onSubmit  = (event)  =>  {
    event.preventDefault();
      // console.log("Name:", event.target[0].value);  // here when even is consoled, It returns a complete set of key vlaue pairs
      // // we access event by putting . then access target then choose value at different indices and . value returns the value of that particular index

      // console.log("Email:", event.target[1].value);
      // console.log("Notes:", event.target[2].value);
      // name= event.target[0].value;
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setNotes(event.target[2].value);
      // email= event.target[1].value;   // here we have stored these values into different variables to use with usestate;
      // notes= event.target[2].value;


  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.contact_foorm}>
          <div className={styles.top_btn}>
            <Button 
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button onClick={onViaCall} text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
          </div>
          <Button
            isOutline={
              true
            } /* this is a prop we have passsed. this can be used in the Button component to modify the button having this prop true. as can be seen in button.jsx*/
            text="VIEW EMAIL FORM"
            icon={<HiMail fontSize="24px" />}
          />

          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name " />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">E-Mail</label>
              <input type="email" name="email " />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows="15"/>
            </div>
            <div 
            style= {{display:"flex",
            justifyContent: "end",
            }}
            >
            <div className="submit_button">
            <Button text="Submit"/>
            </div>
            <div>
              {name + " " + email + " " + notes}
            </div>
            </div>
          </form>
        </div>
        

        <div className={styles.contact_image}>
          <img src="/Images/contact.svg" alt="Contact-image"/>
        </div>
      </section>
    </>
  );
};

export default contactform;
