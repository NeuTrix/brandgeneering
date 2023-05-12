import React from "react";
import { Footer, Header } from 'components';
import { MainContent } from 'pages';

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