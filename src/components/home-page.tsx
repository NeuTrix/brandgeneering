import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Define interface for component props
interface HeaderProps {
  title: string;
}

// Define functional component for Header
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <div>
        <img src="BG-logo2_1.webp" alt="company log" />
        <h1>BrandGeneering Consulting</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <h1>{title}</h1>
    </header>
  );
};

// Define functional component for MainContent
const MainContent: React.FC = () => {
  return (
    <main>
      <h2>BrandGeneering Consulting</h2>
      <h3>Marketing, Strategy, and Web Applications</h3>
    </main>
  );
};

// Define functional component for AboutPage
const AboutPage: React.FC = () => {
  return (
    <main>
      <h2>About Us</h2>
      <p>We are a marketing and web development agency based in the United States.</p>
    </main>
  );
};

// Define functional component for ContactPage
const ContactPage: React.FC = () => {
  return (
    <main>
      <h2>Contact Us</h2>
      <p>You can reach us at info@brandgeneering.com.</p>
    </main>
  );
};

// Define functional component for HomePage that includes Header, MainContent, and Footer
const HomePage: React.FC = () => {
  return (
    <div>
      <Header title="My Home Page" />
      <MainContent />
      <Footer />
    </div>
  );
};

// Define functional component for Footer
const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; 2023 My Home Page</p>
    </footer>
  );
};

// Define the routes for your application
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
