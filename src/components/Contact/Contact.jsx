import React, { useState } from 'react';
import './Contact.css';
import mail from '../../assets/mail.png';
import p from '../../assets/p.png';
import map from '../../assets/map.png';

const Contact = () => {
  const [result, setResult] = useState('');  // Stato per il messaggio di conferma
  const [isSubmitted, setIsSubmitted] = useState(false); // Stato per tracciare l'invio del form

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "70dae94c-b3b3-4b40-bce8-392a55a544e3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setIsSubmitted(true); // Imposta lo stato a vero per indicare l'invio
        event.target.reset(); // Reset del form
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setResult("There was an error submitting the form.");
    }
  };

  return (
    <div id='contact' className='contact'>
      {/* Left side (contact details) */}
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, feel free to send me a message about any project you plan to work on.</p>
          <div className='contact-detail'>
            <img src={mail} alt='Mail icon'></img>
            <p>stenos.516@gmail.com</p>
          </div>
          <div className='contact-detail'>
            <img src={p} alt='Phone icon'></img>
            <p>+34 622061490</p>
          </div>
          <div className='contact-detail'>
            <img src={map} alt='Map icon'></img>
            <p>Position : Madrid</p>
          </div>
        </div>
      </div>
      {/* Right side (form) */}
      {!isSubmitted ? (
        <form onSubmit={onSubmit} className='contact-right'>
          <label>Your Name</label>
          <input type='text' placeholder='Enter Your Name' name='name' required />
          <label>Your Email</label>
          <input type='email' placeholder='Enter Your Email' name='email' required />
          <label>Write your message</label>
          <textarea name='message' rows='8' placeholder='Enter Your Message' required></textarea>
          <button className='contact-submit' type='submit'>Submit Now</button>
        </form>
      ) : (
        // Messaggio di conferma
        <div className='confirmation-message'>
          <h2>Thank you!</h2>
          <p>Your message has been sent successfully. I'll get back to you soon.</p>
        </div>
      )}
      {/* Display result message */}
      {result && <p>{result}</p>}
    </div>
  );
};

export default Contact;
