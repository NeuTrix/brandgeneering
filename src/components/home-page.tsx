import React from "react";

// Define interface for component props
interface HeaderProps {
  title: string;
}

// Define functional component for Header
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <img src="" alt="company log" />
      <h1>{title}</h1>
    </header>
  );
};

// Define functional component for MainContent
const MainContent: React.FC = () => {
  return (
    <main>
      <h2>Welcome to my home page!</h2>
      <p>Here you can find all sorts of information about me.</p>
    </main>
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

export default HomePage;
