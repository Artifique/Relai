
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: This will open the user's default email client.
    // A backend is required for the form to send an email directly from the site.
    const { name, email, message } = formData;
    const subject = `Message de ${name} via le site Relais RH`;
    const body = `${message}\n\n---\n${name}\n${email}`;
    window.location.href = `mailto:contact@relaisrh.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contactez-nous</h2>
        <p className="contact-text">Une question ? Un projet ? N'hésitez pas à nous contacter.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Votre Nom" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Votre Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Votre Message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="contact-button">Envoyer le Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
