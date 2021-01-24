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
const checkboxItems = [
  { label: "Fruits", value: "Fruits" },
  { label: "Vegetables", value: "Vegetables" },
  { label: "Herbs", value: "Herbs" },
  { label: "Floral", value: "Floral" },
  { label: "Cannabis", value: "Cannabis" },
];

const AquaponicForm = () => {
  const [formData, setFormData] = useState(null);
  const [appState, dispatch] = useContext(StoreContext);
  const history = useHistory();

  const handleChange = (value) => {
    setFormData(value);
  };

  const handleSubmit = () => {
    dispatch({ type: "SET_REGION", payload: formData.toLowerCase() });
    history.push("report");
  };

  return (
    <div className="aquaponic-form-wrapper">
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
      <Form name="basic" layout="vertical" {...layout} justify="center">
        <Row justify="center">
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
      </Form>
      <Button
        type="primary"
        className="aquaponic-button-submit"
        onClick={handleSubmit}
      >
        Generate report
      </Button>
    </div>
  );
};

export default AquaponicForm;
