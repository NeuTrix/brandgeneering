

import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import SendIcon from '@material-ui/icons/Send';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { toast } from 'react-toastify';

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

interface IFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}


const ContactForm = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState<IFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // const { handleSubmit, form } = useForm();

  const handleChange = (event: any) => {
    let { name, value } = event.target;
    // 
    console.log('===> in handleChange', { name, value, formState }); // ******
    setFormState({
      ...formState,
      [name]: value,
    })
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

  const handleSubmitForm = async (event: any) => {
    console.log("==>", { formState });///
    event.preventDefault();

  };

  const { name, email, subject, message } = formState;

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmitForm}>
        <div className={classes.form}>
          <TextField
            label="Name"
            name="name"
            value={name}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            label="Subject"
            name="subject"
            value={subject}
            onChange={handleChange}
          />
          <TextField
            label="Message"
            name="message"
            value={message}
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
