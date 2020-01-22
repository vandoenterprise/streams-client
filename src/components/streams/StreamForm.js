import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
    renderError({ error, touched }) {
        if (error && touched) {
            return (
                <span className="ui message error">{error}</span>
            )
        }
    }

    renderInput = ({ input, id, label, meta }) => {
        const className = `field ${meta.error && meta.touched === true ? 'error' : ''}`;

        return (
            <div className={className}>
                <label htmlFor={id}>{label}</label>
                <input {...input} id={id} />
                {this.renderError(meta)}
            </div>
        );
    }

    onFormSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Field name="title" component={this.renderInput} id="title" label="Título" />
                <Field name="description" component={this.renderInput} id="description" label="Descrição" />
                <button className="ui button blue">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Você precisa digitar um título';
    }

    if (!formValues.description) {
        errors.description = 'Você precisa digitar uma descrição';
    }

    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);
