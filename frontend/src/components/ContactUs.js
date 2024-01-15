
import { db } from '../utils/firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from 'firebase/firestore';

const MyTextInput = ({ label, ...props }) => {
 
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};


const ContactUs = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        
        })}
        
        onSubmit={async (values, { setSubmitting }) => {
          try {
            // Store data in Firestore
            // console.log(values)
            
            // const collectionRef = collection("User");
            // console.log(collectionRef)


            const docRef = await addDoc(collection(db, "User"), values);
            // console.log("Document written  ", docRef.data);


            // await collectionRef.add(values);
            // console.log('Data stored successfully!');
            // Handle success or navigate to another page
            // alert('Data stored successfully!');
          } catch (error) {
            // Handle error
            // console.log('Data stored unsuccessfully', error);
            // console.error('Error storing data:', error);
          } finally {
            // Set submitting to false
            setSubmitting(false);
          }
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />


          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactUs

