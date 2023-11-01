import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/InputField";
import { useForm } from "react-hook-form";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const form = useForm({
    defaultValues: {
      title: "",
    },
  });

  const handleFormSubmit = (values) => {
    console.log("TODO FORM: ", values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleFormSubmit)}>
      <InputField name="title" label="  Todo" form={form} />
    </form>
  );
}

export default TodoForm;
