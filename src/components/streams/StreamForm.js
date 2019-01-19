import React from 'react';
import { Field, reduxForm } from 'redux-form'; //Field is supposed to be a react component, note caps

class StreamForm extends React.Component {
  renderError({ error, touched }) { // semantic ui automatically hides error messages, need to make form with className of error
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => { // passing a bunch field props to renderInput, input handles all change/blur etc events
    // context of this is not the class because its not being called by the class
    // its being called by render(), not the class so this needs to be bound
    // needs to be an arrow function to bind context
    const className = `field ${meta.error && meta.touched ? 'error': ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues); // calling a prop passed down by parent component
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    // only ran if the user did not enter a title
    errors.title = 'You must enter a title'; // note this is linked to Field's name prop
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate: validate // validate, connected between errors object's props and name prop of Fields
})(StreamForm);
