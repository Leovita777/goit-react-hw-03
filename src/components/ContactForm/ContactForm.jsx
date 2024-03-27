import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import css from "./ContactForm.module.css";

import {
  FORM_INITIAL_VALUES,
  MAX_CHAR_VALIDATION,
  MIN_CHAR_VALIDATION,
} from "../Utils/Constans";
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput";

const contactsSchema = yup.object({
  name: yup
    .string()
    .required(`User name is required`)
    .min(
      MIN_CHAR_VALIDATION,
      `Your name must contain at least ${MIN_CHAR_VALIDATION} characters`
    )
    .max(
      MAX_CHAR_VALIDATION,
      `Your name should not contain more than ${MAX_CHAR_VALIDATION} characters`
    ),
  number: yup.string().required("User number is required"),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={contactsSchema}
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
    >
      <Form className={css.ContactForm}>
        <label className={css.ContactLabel}>
          <span className={css.ContactSpanTitle}>Name</span>
          <Field className={css.ContactFormInput} type="name" name="name" />
          <ErrorMessage component="p" name="name" />
        </label>
        <label className={css.ContactLabel}>
          <span className={css.ContactSpanTitle}>Number</span>
          <Field
            name="number"
            className={`${css.ContactFormInput} ${css.NumberFormInput}`}
            component={PhoneNumberInput}
          />
          <ErrorMessage
            className={css.ContactSpanTitle}
            component="p"
            name="number"
          />
        </label>
        <button className={css.ContactButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
