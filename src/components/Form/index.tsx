/

import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '500px',
    margin: 'auto',
  },
  form: {
    padding: '10px',
  },
  input: {
    margin: '8px 0',
  },
  submitButton: {
    margin: '8px 0',
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState({});
  const { handleSubmit, form } = useForm();

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      subject: yup.string().required(),
      message: yup.string().required(),
    });
    return schema.validate(formState);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (errors) {
      return toast('Please correct the errors in the form.', { type: 'error' });
    }
    const { name, email, subject, message } = formState;
    try {
      await axios.post('https://example.com/contact', {
        name,
        email,
        subject,
        message,
      });
      toast('Your message has been sent.', { type: 'success' });
      setFormState({});
    } catch (error) {
      toast('There was an error sending your message.', { type: 'error' });
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <div className={classes.form}>
          <TextField
            label="Name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            label="Email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          <TextField
            label="Subject"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
          />
          <TextField
            label="Message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            multiline
          />
          <Button
            type="submit"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
