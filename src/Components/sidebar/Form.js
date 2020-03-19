import React from 'react';
import { withFormik, Field, ErrorMessage, Form } from 'formik';
import './Form.css'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function MyForm(props) {
    const {
        isSubmitting,
        isValid,
    } = props;

    return (
        <div className="form-container">
         <h2>Suscríbete para recibir noticias</h2>
        <Form>
            <div className="inputs-cont">
            <div className="row-one">
                <Field name="email" type="email" className="input" placeholder="Email"/>
                <ErrorMessage name="email">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>

            <div className="row-one">
                <Field name="password" type="password" className="input-p" placeholder="Password" />
                <ErrorMessage name="password">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            </div>
            <div className="row-three">
                <button
                    type="submit"
                    className={`submit ${isSubmitting || !isValid ? 'disabled' : ''}`}
                    disabled={isSubmitting || !isValid}
                >
                    Submit
                </button>
            </div>
        </Form>
        </div>
    );
}

export default withFormik({
    mapPropsToValues(props) {
        return {
            email: props.defaultEmail,
            password: '',
        };
    },

    async validate(values) {
        const errors = {};

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }

        await sleep(500);

        if (Object.keys(errors).length) {
            throw errors;
        }
    },

    handleSubmit(values, formikBag) {
        formikBag.setSubmitting(false);
        console.log(values);
    },
})(MyForm);

