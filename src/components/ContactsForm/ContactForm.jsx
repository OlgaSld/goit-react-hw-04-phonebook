import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, Label, StyledField, ErrorMsg, Button } from './ContactForm_styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .matches( /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces.For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    }).required(),
  number: Yup.string()
    .min(7, 'Invalid phone!')
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, {
      message:
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    }).required(),
});

export const ContactForm = ({onAdd}) => {
    return (
      <Formik
        initialValues={{
          name: '',
          number: '',
          filter: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            Name
            <StyledField name="name" placeholder="Name" />
            <ErrorMsg name="name" component="div" />
          </Label>
          <Label>
            Number
            <StyledField name="number" type="tel" placeholder="Phone Number" />
            <ErrorMsg name="number" component="div" />
          </Label>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    );
}
