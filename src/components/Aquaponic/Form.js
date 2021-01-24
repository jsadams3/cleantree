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
}

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
      <Form name="basic" layout="vertical" {...layout} justify="center">
        <Row justify="center">
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
