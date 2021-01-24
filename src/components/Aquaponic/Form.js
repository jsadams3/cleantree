import React, { useState, useContext } from "react";
import "./styles.css";
import { Form, Input, Button, Checkbox, Slider, Row, Col, Radio } from "antd";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../index";

import { Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`);
};

const showSuccess = () => {
  // TODO: Show a success message or navigate to a success page.
  console.log(`form submitted successfully`);
};

const showError = (error) => {
  // TODO: Show an error message to the user
  console.log(`There was an error submitting the form`);
  console.log(error);
};

const AquaponicForm = () => {
  const [formData, setFormData] = useState(null);
  const [appState, dispatch] = useContext(StoreContext);
  const history = useHistory();

  const handleChange = (value) => {
    setFormData(value);
  };

  const formName = `contact`;
  const handleSubmit = (values) => {
    console.log("-------------", values);
    if (values[`bot-field`] === undefined) {
      delete values[`bot-field`];
    }

    const encodedBody = encode({
      "form-name": formName,
      ...values,
    });

    console.log("==========", encodedBody);

    fetch(`/`, {
      method: `POST`,
      headers: { "Content-Type": `application/x-www-form-urlencoded` },
      body: encodedBody,
    })
      .then(() => showSuccess())
      .catch((error) => showError(error));

    // dispatch({ type: "SET_REGION", payload: formData.toLowerCase() });
    // history.push("report");
  };

  return (
    <form name="contact" netlify>
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default AquaponicForm;
