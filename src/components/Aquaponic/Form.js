import React, { useState, useContext } from "react";
import "./styles.css";
import { Form, Input, Button, Checkbox, Slider, Row, Col, Radio } from "antd";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../index";

const AquaponicForm = () => {
  const [formData, setFormData] = useState(null);
  const [appState, dispatch] = useContext(StoreContext);
  const history = useHistory();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData(value);
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "region", formData }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => console.log(error));

    e.preventDefault();
  };

  return (
    <div className="aquaponic-form-wrapper">
      <form netflify onSubmit={handleSubmit}>
        <select onChange={handleChange} name="region">
          <option value="northeast">Northeast</option>
          <option value="southeast">Southeast</option>
          <option value="upper_midwest_east_north_central">
            Upper Midwest (East North Central)
          </option>
          <option value="ohio_valley_central">Ohio Valley (Central)</option>
          <option value="south">South</option>
          <option value="southwest">Southwest</option>
          <option value="northern_rockies_and_plains_west_north_central">
            Northern Rockies and Plains (West North Central)
          </option>
          <option value="west">West</option>
          <option value="northwest">Northwest</option>
        </select>
        <Button htmlType="submit">Generate report</Button>
      </form>
    </div>
  );
};

export default AquaponicForm;
