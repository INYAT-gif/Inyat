import React from "react";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ContactInfo />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
};

// Header Component
const Header: React.FC = () => (
  <header className="text-center mb-4">
    <h1>Inyat Nathani</h1>
    <p className="text-muted">Software Developer</p>
  </header>
);

// Contact Info Section
const ContactInfo: React.FC = () => (
  <section className="contact-info text-center mb-4">
    <p><strong>Telefon:</strong> 0760256712</p>
    <p><strong>Adress:</strong> Västra Götaland</p>
    <p><strong>E-post:</strong> <a href="mailto:inyat.nathani@gmail.com">inyat.nathani@gmail.com</a></p>
  </section>
);

// About Section
const About: React.FC = () => (
  <section className="mb-5">
    <h2 className="section-title">Om mig</h2>
    <p>Jag är en Software Developer med omfattande kunskap inom versionshanteringssystem, frontend, databas och backend. Jag har en stark passion för att skapa innovativa IT-lösningar och arbetar ständigt med att utveckla mina färdigheter.</p>
    <ul>
      <li><strong>Versionshanteringssystem:</strong> Git & GitHub.</li>
      <li><strong>Frontend:</strong> HTML, CSS, Bootstrap, JavaScript, React Hooks, React Axios & Router.</li>
      <li><strong>Databas:</strong> MySQL, Java Database Connectivity.</li>
      <li><strong>Backend:</strong> Java EE, Spring Boot, JPA, Hibernate ORM, RESTful APIs.</li>
    </ul>
  </section>
);

// Experience Section
const Experience: React.FC = () => (
  <section className="mb-5">
    <h2 className="section-title">Erfarenhet</h2>
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Internship @ Bright Skills</h5>
        <h6 className="card-subtitle mb-2 text-muted">September 2024 - Pågående</h6>
        <p className="card-text">Systemutvecklare / Programmerare. Migrering av en Traditional Web App till React Web App. Systemet inkluderar funktioner såsom intranät, tidsrapportering och integration med Fortnox för fakturahantering och CRM.</p>
      </div>
    </div>
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Projektledare IT @ Herrljunga och Vårgårda kommun</h5>
        <h6 className="card-subtitle mb-2 text-muted">Jan 2023 - Dec 2023</h6>
        <p className="card-text">Drev flera IT-projekt självständigt med fokus på systemimplementering och AD-inloggning genom federation.</p>
      </div>
    </div>
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">IT-Projektledare (Praktik)</h5>
        <h6 className="card-subtitle mb-2 text-muted">Aug 2022 - Dec 2022</h6>
        <p className="card-text">Ledde implementationen av stark autentisering och Single Sign-On, samt hantering av tvåfaktorsautentisering.</p>
      </div>
    </div>
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Ledsagare och teknisk ansvarig @ Trollhättans Stad</h5>
        <h6 className="card-subtitle mb-2 text-muted">Feb 2017 - Jul 2021</h6>
        <p className="card-text">Ansvarade för verksamhetens tekniska behov inom hårdvara och mjukvara, samt stöd till arbetskamrater.</p>
      </div>
    </div>
  </section>
);

// Education Section
const Education: React.FC = () => (
  <section className="mb-5">
    <h2 className="section-title">Utbildning</h2>
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Campus Mölndal</h5>
        <h6 className="card-subtitle mb-2 text-muted">IT-Projektledare, 2021–2022</h6>
        <ul>
          <li>Teknisk grundkurs (IT-säkerhet, server och nätverk)</li>
          <li>Ledarskap och affärsmannaskap</li>
          <li>Förändringsledning och agila arbetssätt</li>
        </ul>
      </div>
    </div>
  </section>
);

// Projects Section
const Projects: React.FC = () => (
  <section className="mb-5">
    <h2 className="section-title">Projekt</h2>
    <div className="project-card">
      <h5>Borrow-a-Book-Library-App</h5>
      <p>En app för hantering av boklån på bibliotek.</p>
      <a href="https://github.com/yourusername/Borrow-a-Book-Library-App" target="_blank" rel="noopener noreferrer">Visa på GitHub</a>
    </div>
  </section>
);

// Footer Component
const Footer: React.FC = () => (
  <footer className="text-center">
    <p>&copy; 2024 Inyat Nathani. All rights reserved.</p>
  </footer>
);

export default App;
