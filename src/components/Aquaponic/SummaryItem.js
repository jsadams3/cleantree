import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

const SummaryItem = ({ title, content }) => {
  return (
    <div>
      <Title level={4}>{title}</Title>
      <ol>
        {content.map((item) => (
          <li className="feature-list-item">{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default SummaryItem
