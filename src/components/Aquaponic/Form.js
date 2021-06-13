import React, { useState } from "react";
import "./styles.css";
import { Form, Row, Col } from "antd";
import Report from "./Report";

import { Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AquaponicForm = () => {
  const [formData, setFormData] = useState("");

  const handleChange = (value) => {
    setFormData(value);
  };

  return (
    <div className="aquaponic-form-wrapper">
      <Form name="basic" layout="vertical" {...layout} justify="center">
        <Row justify="center">
          <Col span={12}>
            <Form.Item label="Select your region" className="label">
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
      <Report selection={formData.toLowerCase()} />
    </div>
  );
};

export default AquaponicForm;
