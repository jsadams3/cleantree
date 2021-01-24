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

  const handleSubmit = (values) => {
    console.log("-------------", values);
    const formName = `contact`;
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

    dispatch({ type: "SET_REGION", payload: formData.toLowerCase() });
    history.push("report");
  };

  return (
    <div className="aquaponic-form-wrapper">
      <form
        name={"contact"}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <Form
        name="basic"
        method="POST"
        onFinish={handleSubmit}
        layout="vertical"
        {...layout}
        justify="center"
      >
        <Row justify="center">
          <Form.Item
            label="Don't fill this out"
            className={`hidden`}
            style={{ display: `none` }}
            name="bot-field"
          >
            <Input type={`hidden`} />
          </Form.Item>

          <Col span={12}>
            <Form.Item
              label="1. Enter your zip code"
              name="zipcode"
              className="label"
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="4. Select your region" className="label">
              <Select onChange={handleChange}>
                <Option value="Northeast">Northeast</Option>
                <Option value="Southeast">Southeast</Option>
                <Option value="upper_midwest_east_north_central">
                  Upper Midwest (East North Central)
                </Option>
                <Option value="ohio_valley_central">
                  Ohio Valley (Central)
                </Option>
                <Option value="South">South</Option>
                <Option value="Southwest">Southwest</Option>
                <Option value="northern_rockies_and_plains_west_north_central">
                  Northern Rockies and Plains (West North Central)
                </Option>
                <Option value="West">West</Option>
                <Option value="Northwest">Northwest</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label="2. What is your DIY experience?"
              name="experience"
              className="label"
            >
              <Slider min={0} max={10} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="5. Enter your sector" className="label">
              <Select>
                <Option value="Residential">Residential</Option>
                <Option value="Commercial">Commercial</Option>
                <Option value="Industrial">Industrial</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Col span={12}>
          <Form.Item label="3. What is your budget?" className="label">
            <Select>
              <Option value="0">$0-49,00</Option>
              <Option value="1">$5000-99,000</Option>
              <Option value="2">$10,000-24,000</Option>
            </Select>
          </Form.Item>
        </Col>

        <Form.Item
          name="radio-group"
          label="Do you need funding from the USDA?"
          className="label"
        >
          <Radio.Group>
            <Radio style={radioStyle} value="a">
              Yes
            </Radio>
            <Radio style={radioStyle} value="b">
              No
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            className="aquaponic-button-submit"
            htmlType="submit"
            disabled={false}
          >
            Generate report
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AquaponicForm;
