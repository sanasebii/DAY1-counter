import React from 'react';

const Card = ({ title,image, content, footer }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="imd">
        <img src="{image}" alt="" />
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
      <div className="card-footer">
        <p>{footer}</p>
      </div>
    </div>
  );
};

export default Card;
