import React from "react";
import "./contact-us.css";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mgedkyky");
  if (state.succeeded) {
      return <section><p id="submit-confirm">Message Sent!</p></section>;
  }
  return (
    <section id="contact">
        <h1 id="contact-header">Contact</h1>
        <form onSubmit={handleSubmit}>
        <label className="contact-label" htmlFor="email">Name:</label>
        <input id="name" type="name" name="name" required="required"/>
        <ValidationError prefix="Name" field="name"errors={state.errors}/><br/>

        <label className="contact-label" htmlFor="email">Email Address:</label>
        <input id="email" type="email" name="email" required="required"/>
        <ValidationError prefix="Email" field="email"errors={state.errors}/><br/>

        <label className="contact-label" htmlFor="message">Message:</label><br/>
        <textarea id="message" name="message" rows="10" cols="100" required="required"/><br/>
        <ValidationError prefix="Message" field="message" errors={state.errors}/>
        
        <button className="btn btn-block btn-info" disabled={state.submitting}>Submit</button>
        </form>
    </section>
  );
}
function ContactUs() {
  return (
    <ContactForm />
  );
}
export default ContactUs;