
import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Recrutement & Sélection',
      description: 'Nous trouvons les meilleurs talents pour votre entreprise.'
    },
    {
      title: 'Conseil RH',
      description: 'Optimisez votre gestion des ressources humaines avec nos experts.'
    },
    {
      title: 'Formation & Développement',
      description: 'Développez les compétences de vos équipes pour une meilleure performance.'
    },
     {
      title: 'Accompagnement Carrière',
      description: 'Nous aidons les individus à atteindre leurs objectifs professionnels.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Nos Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
