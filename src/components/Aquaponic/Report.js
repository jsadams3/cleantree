import React from "react";
import data from "../../../fixtures/dummy_region_metrics.json";
import SummaryItem from "./SummaryItem";
import mapImg from "../../images/map.jpg";

import { Typography } from "antd";

const { Title } = Typography;

const AquaponicReport = ({ selection }) => {
  const region = selection || "northeast";
  const regionData = data["regions"][region];

  return (
    <div className="report">
      <Title level={1} type="primary">
        {regionData.name}
      </Title>
      <div className="report-region-info">
        <div>
          <h3 className="feature-title">States</h3>
          <section className="report-states">
            {regionData.states.map((state) => (
              <span className="state-abbrev">{state.abbreviation}</span>
            ))}
          </section>
          <h3 className="feature-title">Average Electricity Price</h3>
          <section>
            <div>
              National: $
              {regionData.average_electricity_retail_price.national_average}
            </div>
          </section>
          <section>
            <div>
              Regional: $
              {regionData.average_electricity_retail_price.regional_average}
            </div>
          </section>
          <br></br>
          <h3 className="feature-title">Average Water Price</h3>
          <section>
            <div>
              National: $
              {regionData.average_water_retail_price.national_average}
            </div>
          </section>
          <section>
            <div>
              Regional: $
              {regionData.average_water_retail_price.regional_average}
            </div>
          </section>
        </div>
        <img src={mapImg} className="map" />
        <section>
          <h3 className="feature-title">Water generation</h3>
          <ol>
            {regionData.water_generation.map((item) => (
              <li key={item.rank} className="feature-list-item">
                {item}
              </li>
            ))}
          </ol>
          <h3 className="feature-title">Renewable Energy</h3>
          <ol>
            {regionData.renewable_energy.map((item) => (
              <li className="feature-list-item">{item}</li>
            ))}
          </ol>
        </section>
      </div>
      <div className="region-summary">
        {regionData.summary.map((item) => (
          <SummaryItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default AquaponicReport;
