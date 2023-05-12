import React from "react";
import { Link } from "react-router-dom";

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
        <h1>BrandGeneering Consulting **`</h1>
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

export default Header