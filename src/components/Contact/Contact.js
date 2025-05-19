import React, { useState } from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // simple regexes
  const nameRegex = /^[A-Za-z\s]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const errs = {};
    if (!nameRegex.test(form.name.trim())) {
      errs.name = 'Name must be letters only (2–50 chars).';
    }
    if (!emailRegex.test(form.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (form.message.trim().length < 5) {
      errs.message = 'Message must be at least 5 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = new FormData();
    formData.append('access_key', '0cdacf99-4ad7-485a-bd92-4904fc12489a');
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData
    }).then(r => r.json());

    if (res.success) {
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Oops! Something went wrong.');
    }
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything you’d like me to work on.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" />
              <p>varshithkommi@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="phone" />
              <p>+91 984890XX74</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Hyderabad, Telangana</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="right">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <small className="error">{errors.name}</small>}

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="abc@example.com"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <small className="error">{errors.email}</small>}

          <label>Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <small className="error">{errors.message}</small>}

          <button type="submit" className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
