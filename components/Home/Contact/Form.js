import React from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
const initialValues = {
  name: '',
  email: '',
  message: '',
};
function Contact() {
  return (
    <div>
      <Formik
        validationSchema={object({
          name: string().required('Your name is mandatory!!!').min(2).max(100),
          email: string().email().required('Your email is mandatory!!!'),
          message: string().required().min(20).max(300),
        })}
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          try {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.resetForm();
            }, 5000);
            // const res = await fetch('/api/investor', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({
            //     values,
            //   }),
            // });
            // const json = await res.json();
            // if (!res.ok) throw Error(json.message);
            // console.log(json);

            // router.push('/');
          } catch (e) {
            throw Error(e.message);
          }
        }}
      >
        {({ values, isSubmitting, errors }) => (
          <Form
            as="div"
            className="flex flex-col max-w-lg mx-auto rounded overflow-hidden bg-yellow-200 shadow-xl"
            autoComplete="off"
          >
            <div className="mx-8 mt-8 flex flex-col">
              <Field
                name="name"
                type="text"
                as="input"
                className="input-field"
                placeholder="Your name"
              />
              <ErrorMessage name="name" component="span" className="error-message" />
            </div>
            <div className="mx-8 mt-4 flex flex-col">
              <Field
                name="email"
                type="text"
                as="input"
                className="input-field"
                placeholder="Your email"
              />
              <ErrorMessage name="email" component="span" className="error-message" />
            </div>
            <div className="mx-8 mt-4 flex flex-col">
              <Field
                name="message"
                as="textarea"
                className="input-field h-40"
                placeholder="Your message"
              />
              <ErrorMessage name="message" component="span" className="error-message" />
            </div>
            <button
              type="submit"
              className="mx-8 mt-4 mb-8 p-2 bg-red-400 font-bold text-white rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'sending...' : 'submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;
