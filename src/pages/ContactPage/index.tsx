import ContactForm from "components/Form";
import React from "react";


const ContactPage: React.FC = () => {
  return (
    <main>
      <h2>Contact Us</h2>
      <ContactForm />
      <p>You can reach us at info@brandgeneering.com.</p>
    </main>
  );
};

export default ContactPage;