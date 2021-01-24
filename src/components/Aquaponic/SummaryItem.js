import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const SummaryItem = ({ title, content }) => {
  return (
    <div>
      <Title level={4}>{title}</Title>
      <p>{content}</p>
    </div>
  );
};

export default SummaryItem;
