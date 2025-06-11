import React from "react";

const Event = (props) => {
  const{ title, date, image, link } = props;
  return (
    <div className="Event">
      <img src={image}/>
      <h3>{title}</h3>
      <h5>Date: {date}</h5>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>Read More</button>
      </a>
    </div>
  );
};

export default Event;