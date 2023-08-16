import React from 'react'

const InfoCard = ({title, details}) => {
  return (
    <div className="info-card">
      <div className="text">
          <div className="shape-left"></div>
          <div className="shape-right"></div>
          <h2 className="title">{title}</h2>
          <h2 className="details">
              {details}
          </h2>
      </div>     
    </div>
  )
}

export default InfoCard