import React, { useContext } from "react";
import { StoreContext } from "../../index";
import data from "../../../fixtures/dummy_region_metrics.json";
import SummaryItem from "./SummaryItem";

import { Typography } from "antd";

const { Title } = Typography;

const AquaponicReport = () => {
  const [appState, dispatch] = useContext(StoreContext);
  const region = appState.region || "northeast";
  const regionData = data["regions"][region];
  console.log(regionData);

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
        </div>
        <img src="https://source.unsplash.com/800x400?nature" />
        <section>
          <h3 className="feature-title">Water generation</h3>
          <ul>
            {regionData.water_generation.map((item) => (
              <li className="feature-list-item">{item}</li>
            ))}
          </ul>
          <h3 className="feature-title">Renewable Energy</h3>
          <ul>
            {regionData.renewable_energy.map((item) => (
              <li className="feature-list-item">{item}</li>
            ))}
          </ul>
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
